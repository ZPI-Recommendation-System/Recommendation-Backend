/*
{
  "ram in units": 3.84, // GB
  "usage": "Aplikacje biurowe i internet", <- Jakie typy dozwolone?
  "price in units": 7279.999999999999, // zl <-
  "size": {
    "10": false,
    "11": false,
    "13": false,
    "15": false,
    "16": false,
    "17": true,
    ">17": true,
    "11.5": false,
    "<10": false
  },
  "screen": {
    "Ekran dotykowy": false,
    "HDMI": true,
    "Inne złącza wideo": true
  },
  "battery in units": 2.16, // h
  "disk in units": 585, // GB
  "internet": {
    "Slot na kartę SIM": false,
    "Gniazdo LAN": true
  },
  "data": {
    "Napęd CD": true,
    "Czytnik kart pamięci": false
  }
}
 */

import { ApiProperty } from "@nestjs/swagger";
import { ArrayUnique, IsBoolean, IsIn, IsNotEmpty, IsNumber, Max, Min, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

//TODO: Zero jest niewiadomą/Brak filtra
export class ScreenPreferences {
  @ApiProperty()
  @IsBoolean()
  touchScreen: boolean;
  @ApiProperty()
  @IsBoolean()
  HDMI: boolean;
  @IsBoolean()
  @ApiProperty()
  otherVideoConnectors: boolean;
}

export class InternetPreferences {
  @ApiProperty()
  @IsBoolean()
  simCard: boolean;
  @ApiProperty()
  @IsBoolean()
  lanPort: boolean;
}

export class DataPreferences {
  @ApiProperty()
  @IsBoolean()
  diskDrive: boolean;
  @ApiProperty()
  @IsBoolean()
  sdCardReader: boolean;
}

export const UsageTypes = [
  'Aplikacje biurowe i internet',
  'Gry',
  'Renderowanie Filmów',
];

const ScreenSizes = ['<10', '10', '11', '11.5', '13', '15', '16', '17', '>17'];

export type UsageType = typeof UsageTypes[number];

export type ScreenSize = typeof ScreenSizes[number];

export class FormDto {
  @IsNumber()
  @Min(0)
  @Max(16)
  ramInUnits: number;

  @ApiProperty({
    description:
      "'Aplikacje biurowe i internet'\n" +
      "  | 'Gry'\n" +
      "  | 'Renderowanie Filmów'",
  })
  @IsNotEmpty()
  @IsIn(UsageTypes)
  usageType: UsageType; //Usage type
  @IsNumber()
  @Min(0)
  maxPricePLN: number;

  @ApiProperty({
    description:
      '<10 ' + '10 ' + '11 ' + '11.5 ' + '13 ' + '15 ' + '16 ' + '17 ' + '>17',
  })
  @IsNotEmpty()
  @ArrayUnique()
  @IsIn(ScreenSizes, {each: true})
  preferredScreenSizes: ScreenSize[];

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ScreenPreferences)
  screenPreferences: ScreenPreferences;

  @IsNumber()
  @Min(1)
  @Max(20)
  batteryRunTime: number;

  @IsNumber()
  @Min(100)
  @Max(2000)
  minDiscSize: number;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => InternetPreferences)
  internetPreferences: InternetPreferences;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => DataPreferences)
  dataPreferences: DataPreferences;
}
