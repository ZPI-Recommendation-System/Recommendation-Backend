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

export class ScreenPreferences {
  @ApiProperty()
  touchScreen: boolean;
  @ApiProperty()
  HDMI: boolean;
  @ApiProperty()
  otherVideoConnectors: boolean;
}

export class InternetPreferences {
  @ApiProperty()
  simCard: boolean;
  @ApiProperty()
  lanPort: boolean;
}

export class DataPreferences {
  @ApiProperty()
  diskDrive: boolean;
  @ApiProperty()
  sdCardReader: boolean;
}

export type UsageType =
  | "Aplikacje biurowe i internet"
  | "Gry"
  | "Renderowanie Filmów";

export type ScreenSize =
  | "<10"
  | "10"
  | "11"
  | "11.5"
  | "13"
  | "15"
  | "16"
  | "17"
  | ">17";

export class FormDto {
  
  ramInUnits: number;
  @ApiProperty({
    description:
      "'Aplikacje biurowe i internet'\n" +
      "  | 'Gry'\n" +
      "  | 'Renderowanie Filmów'"
  })
  usageType: UsageType; //Usage type
  maxPricePLN: number;
  @ApiProperty({
    description:
      "<10 " + "10 " + "11 " + "11.5 " + "13 " + "15 " + "16 " + "17 " + ">17"
  })
  preferredScreenSizes: ScreenSize[];
  screenPreferences: ScreenPreferences;
  batteryRunTime: number;
  minDiscSize = 0;
  internetPreferences: InternetPreferences;
  dataPreferences: DataPreferences;
}
