import { Predicate, PredicateWithCustom } from "./base.predicate";
import { In, LessThan, MoreThan, Raw } from "typeorm";
import { ScreenSize } from "../../recommendations/dto/form.dto";

const mapper = {
  processorFreq: (value): PredicateWithCustom => {
    return { processor: { frequency: value } };
  },

  processorCores: (value): Predicate => {
    return { processor: { cores: value } };
  },
  connectionsHas: (value: string[][]): Predicate => {
    return { connections: { connectionName: Raw(TransformArrayArrayToQuery(value)) } };
  },
  communicationHas: (value: string[][]): Predicate => {
    return { communications: { communicationName: Raw(TransformArrayArrayToQuery(value)) } };
  },
  screenSizes: (value: ScreenSize[][]): Predicate => {
    return { screen: { diagonalScreenInches: In(value.flat(1)) } };
  }
};

const mergeObject = (objToMerge, targetMerge) => {
  for (const key in objToMerge) {
    if (key in targetMerge) {
      if (
        typeof targetMerge[key] == "object" &&
        typeof objToMerge[key] == "object"
      ) {
        mergeObject(objToMerge[key], targetMerge[key]);
      } else {
        throw new Error("yes");
      }
    } else {
      targetMerge[key] = objToMerge[key];
    }
  }
};

export const toModel = (model: PredicateWithCustom): Predicate => {
  const m: Predicate = {};
  for (const key in model) {
    if (key in mapper) {
      if (key == "connectionsHas") {
        console.log(TransformArrayArrayToQuery(model[key])("test"));
      }
      const result = mapper[key](model[key]);
      mergeObject(result, m);
    } else if (Array.isArray(model[key])) {
      m[key] = In(model[key].flat(1));
    } else {
      m[key] = model[key];
    }
  }
  return m;
};

export function TransformArrayArrayToQuery(arrayArray: string[][]) {
  let s = "";
  const arrays = arrayArray.map(it => {
    return "'" + it.join("', '") + "'";
  });
  for (let i = 0; i < arrays.length; i++) {
    s += ` AND ^^ IN (${arrays[i]})`;
  }
  s = s.slice(5);
  return (query) => s.replace(/\^\^/gi, query);
}

export const AND = (models: PredicateWithCustom[]): PredicateWithCustom => {
  const finalOption: PredicateWithCustom = {};
  for (let i = 0; i < models.length; i++) {
    const model = models[i];
    for (const key in model) {
      if (key in finalOption) {
        //RESOLVE ISSUE?
        if (finalOption[key] instanceof MoreThan) {
          finalOption[key] =
            model[key] > finalOption[key] ? model[key] : finalOption[key];
        } else if (finalOption[key] instanceof LessThan) {
          finalOption[key] =
            model[key] < finalOption[key] ? model[key] : finalOption[key];
        } else if (Array.isArray(model[key])) {
          finalOption[key].push(model[key]);
        }
      } else {
        if (typeof model[key] == "string" || Array.isArray(model[key])) {
          finalOption[key] = [model[key]];
        } else {
          finalOption[key] = model[key];
        }
      }
    }
  }
  return toModel(finalOption);
};
//
// export const OR = (...models: ModelWhere[]): ModelWhere => {
//   return (model: ModelEntity) => {
//     for (let i = 0; i < models.length; i++) {
//       if (models[i](model)) {
//         return true;
//       }
//     }
//     return false;
//   };
// };
//
// export const NOT = (modelBoolean: ModelWhere): ModelWhere => {
//   return (model: ModelEntity) => !modelBoolean(model);
// };
