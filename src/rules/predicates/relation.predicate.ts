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
  multimediaHas: (value: string[][]): Predicate => {
    return { multimedia: { multimediaName: Raw(TransformArrayArrayToQuery(value)) } };
  },
  screenSizes: (value: ScreenSize[][]): Predicate => {
    if(true){

      let query = ""
      const base = value.flat(1)
      const flatten = base.filter(it => !isNaN(+it))
      for(let val in flatten){
        query += "(%col% BETWEEN " + (Number(flatten[val])) + " AND " + (Number(flatten[val])+1) + ") OR ";
      }
      if(base.includes(">17"))
      {
        query+= "(%col% > 17) OR "
      }
      if(base.includes("<10"))
      {
        query += "(%col% < 10) OR "
      }
      query = "("+query.substring(0, query.length-3) + ")"
      // console.log(query)
      return {screen: {diagonalScreenInches: Raw(columnAlias => query.replace(/%col%/gi, columnAlias))}}
    }

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
      const result = mapper[key](model[key]);
      // console.log(result)
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
