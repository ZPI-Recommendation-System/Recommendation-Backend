import { Test } from "@nestjs/testing";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ScreenEntity } from "../laptops/entity/screen.entity";
import { GraphicsEntity } from "../laptops/entity/graphics.entity";
import { ConnectionEntity } from "../laptops/entity/connection.entity";
import { ControlEntity } from "../laptops/entity/control.entity";
import { MultimediaEntity } from "../laptops/entity/multimedia.entity";
import { CommunicationEntity } from "../laptops/entity/communication.entity";
import { BenchmarkEntity } from "../laptops/entity/benchmark.entity";
import { DriveTypeEntity } from "../laptops/entity/drive-type.entity";
import { Type } from "@nestjs/common/interfaces/type.interface";
import { ModelImgEntity } from "../laptops/entity/model-img.entity";
import { Repository } from "typeorm";
import { ModelEntity } from "../laptops/entity/model.entity";
import { ProcessorEntity } from "../laptops/entity/processor.entity";

export const CreateLaptopsTestingModule = async (
  controllers: Type<any>[],
  providers: Type<any>[],
) => {
  const module = await Test.createTestingModule({
    imports: [
      TypeOrmModule.forRoot({
        type: 'sqlite',
        database: ':memory:',
        dropSchema: true,
        synchronize: true,
        entities: [
          ModelEntity,
          ProcessorEntity,
          ScreenEntity,
          GraphicsEntity,
          ConnectionEntity,
          ControlEntity,
          MultimediaEntity,
          CommunicationEntity,
          BenchmarkEntity,
          ModelImgEntity,
          DriveTypeEntity,
        ],
      }),
      TypeOrmModule.forFeature([
        ModelEntity,
        ProcessorEntity,
        ScreenEntity,
        GraphicsEntity,
        ConnectionEntity,
        ControlEntity,
        MultimediaEntity,
        CommunicationEntity,
        BenchmarkEntity,
        ModelImgEntity,
        DriveTypeEntity,
      ]),
    ],
    providers: providers,
    controllers: controllers,
  }).compile();

  const moduleRepository = module.get('ModelEntityRepository');
  await moduleRepository.save(SampleLaptops);

  return module;
};

export const SampleLaptops = [
  {
    id: '000012b3-bdf1-4374-b5e2-f20a15310068',
    name: 'Laptop Lenovo IdeaPad Gaming 3 15ACH6 15,6 " AMD Ryzen 7 32 GB / 2048 GB czarny',
    model: 'IdeaPad Gaming 3 15ACH6',
    type: 'standardowy',
    producentCode: '82K200P0W',
    batterySizeWH: 45,
    batterySizeMAH: 3910,
    batteryTime: null,
    color: 'czarny',
    width: 36,
    length: 2.8,
    depth: 25.2,
    weight: 2.25,
    ramAmount: 32,
    ramFrequency: 3200,
    ramNumberOfSlots: 2,
    ramNumberOfFreeSlots: 0,
    ramType: 'DDR4',
    ramMaxAmount: 32,
    driveStorage: 2048,
    driveType: 'SSD',
    hddSpeed: null,
    price: 5699,
    priceSource: 'allegro',
    processor: {
      id: 20333,
      model: 'AMD Ryzen 7 5800H',
      series: 'AMD Ryzen 7',
      cores: 8,
      frequency: 3.2,
      benchmark: {
        id: 1359,
        type: 'CPU',
        brand: 'AMD',
        model: 'Ryzen 7 5800H',
        benchmark: 75.1,
        samples: 20860,
        url: 'https://cpu.userbenchmark.com/SpeedTest/1442974/AMD-Ryzen-7-5800H-with-Radeon-Graphics',
      },
    },
    screen: {
      id: 25360,
      diagonalScreenInches: 15.6,
      resolution: '1920 x 1080',
      screenFinish: 'matowa',
      screenType: 'IPS',
      refreshRate: 120,
      touchScreen: false,
    },
    graphics: {
      id: 20333,
      graphicsCardModel: 'NVIDIA GeForce RTX 3050Ti',
      graphicsCardType: 'Grafika dedykowana',
      graphicsCardVRam: '4 GB',
      benchmark: {
        id: 1537,
        type: 'GPU',
        brand: 'Nvidia',
        model: 'RTX 3050-Ti (Laptop)',
        benchmark: 58.5,
        samples: 14683,
        url: 'https://gpu.userbenchmark.com/SpeedTest/1559532/NVIDIA-GeForce-RTX-3050-Ti-Laptop-GPU',
      },
    },
    communications: [
      {
        communicationName: 'Bluetooth',
      },
      {
        communicationName: 'LAN 10/100/1000 Mbps',
      },
      {
        communicationName: 'Wi-Fi',
      },
    ],
    multimedia: [],
    drives: [
      {
        driveType: 'brak',
      },
    ],
    connections: [
      {
        connectionName: 'minijack 3,5 mm (audio)',
      },
      {
        connectionName: 'HDMI',
      },
      {
        connectionName: 'USB 3.1 typ C',
      },
      {
        connectionName: 'USB 3.1 typ A',
      },
      {
        connectionName: 'RJ-45',
      },
    ],
    controls: [
      {
        controlName: 'klawiatura numeryczna',
      },
      {
        controlName: 'klawiatura',
      },
      {
        controlName: 'klawiatura podświetlana',
      },
      {
        controlName: 'touchpad',
      },
    ],
    images: [
      {
        id: 178091,
        url: 'https://a.allegroimg.com/original/110fee/0772036f451589bd60d05e34ec2e',
      },
      {
        id: 178092,
        url: 'https://a.allegroimg.com/original/111b32/12fb18694f509606496e73c92e7d',
      },
      {
        id: 178093,
        url: 'https://a.allegroimg.com/original/11d5d8/aac8c5d545fa861a507708a8f7f2',
      },
      {
        id: 178094,
        url: 'https://a.allegroimg.com/original/11d9be/1f46e7354bcbbfcf7e79d3187329',
      },
      {
        id: 178095,
        url: 'https://a.allegroimg.com/original/114d46/6fda25a14b70848fc3e18d1387f9',
      },
      {
        id: 178096,
        url: 'https://a.allegroimg.com/original/11750c/ce758e2a46019d67cbc30bc6143a',
      },
      {
        id: 178097,
        url: 'https://a.allegroimg.com/original/11cc69/63bea37e41f8afd2695ea75593e4',
      },
      {
        id: 178098,
        url: 'https://a.allegroimg.com/original/11f2aa/f02b5da24b18ad854ead2a0c3d5d',
      },
      {
        id: 178099,
        url: 'https://3.allegroimg.com/original/032ec0/b2f4bbb242c8ac4c9ce82319d793',
      },
    ],
  },
  {
    id: '00139860-de6e-4147-b9a2-0bc3a5fa46bb',
    name: 'Laptop Lenovo ThinkPad P51 15,6 " Intel Core i7 32 GB / 1000 GB czarny',
    model: 'ThinkPad P51',
    type: 'standardowy',
    producentCode: 'ThinkPad P51',
    batterySizeWH: 90,
    batterySizeMAH: null,
    batteryTime: null,
    color: 'czarny',
    width: 37.74,
    length: 2.94,
    depth: 25.23,
    weight: 2.67,
    ramAmount: 32,
    ramFrequency: 2400,
    ramNumberOfSlots: 4,
    ramNumberOfFreeSlots: 2,
    ramType: 'DDR4',
    ramMaxAmount: 64,
    driveStorage: 1000,
    driveType: 'SSD',
    hddSpeed: null,
    price: 4958.02,
    priceSource: 'allegro',
    processor: {
      id: 20334,
      model: 'Intel Core i7-7820HQ',
      series: 'Intel Core i7',
      cores: 4,
      frequency: 2.9,
      benchmark: {
        id: 1373,
        type: 'CPU',
        brand: 'Intel',
        model: 'Core i7-7820HQ',
        benchmark: 63,
        samples: 15851,
        url: 'https://cpu.userbenchmark.com/SpeedTest/185229/IntelR-CoreTM-i7-7820HQ-CPU---290GHz',
      },
    },
    screen: {
      id: 25361,
      diagonalScreenInches: 15.6,
      resolution: '3840 x 2160',
      screenFinish: 'matowa',
      screenType: 'IPS',
      refreshRate: 60,
      touchScreen: false,
    },
    graphics: {
      id: 20334,
      graphicsCardModel: 'NVIDIA Quadro M2200M',
      graphicsCardType: 'Grafika dedykowana',
      graphicsCardVRam: '4 GB',
      benchmark: {
        id: 1543,
        type: 'GPU',
        brand: 'Nvidia',
        model: 'Quadro P5000-M (Mobile)',
        benchmark: 65,
        samples: 646,
        url: 'https://gpu.userbenchmark.com/SpeedTest/249248/NVIDIA-Quadro-P5000',
      },
    },
    communications: [
      {
        communicationName: 'LAN 10/100/1000 Mbps',
      },
      {
        communicationName: 'Bluetooth',
      },
      {
        communicationName: 'Wi-Fi',
      },
    ],
    multimedia: [],
    drives: [
      {
        driveType: 'brak',
      },
    ],
    connections: [
      {
        connectionName: 'HDMI',
      },
      {
        connectionName: 'złącze dokowania',
      },
      {
        connectionName: 'USB 3.1 typ C',
      },
      {
        connectionName: 'USB 3.1 typ A',
      },
      {
        connectionName: 'RJ-45',
      },
      {
        connectionName: 'minijack 3,5 mm (audio)',
      },
      {
        connectionName: 'mini DisplayPort',
      },
      {
        connectionName: 'inne',
      },
    ],
    controls: [
      {
        controlName: 'klawiatura podświetlana',
      },
      {
        controlName: 'klawiatura numeryczna',
      },
      {
        controlName: 'klawiatura',
      },
      {
        controlName: 'touchpad',
      },
      {
        controlName: 'punkt dotykowy (TrackPoint)',
      },
    ],
    images: [
      {
        id: 178100,
        url: 'https://a.allegroimg.com/original/11d611/5028f9574ab1854d88f743313ba3',
      },
    ],
  },
  {
    id: '0036cf96-dc5a-48f6-8fe9-06e01ab5fc76',
    name: 'Laptop Lenovo ThinkPad T570 15,6 " Intel Core i7 16 GB / 256 GB czarny',
    model: 'ThinkPad T570',
    type: 'ultrabook',
    producentCode: '1437',
    batterySizeWH: null,
    batterySizeMAH: null,
    batteryTime: null,
    color: 'czarny',
    width: null,
    length: null,
    depth: null,
    weight: null,
    ramAmount: 16,
    ramFrequency: null,
    ramNumberOfSlots: null,
    ramNumberOfFreeSlots: null,
    ramType: 'DDR4',
    ramMaxAmount: null,
    driveStorage: 256,
    driveType: 'SSD',
    hddSpeed: null,
    price: 3226.43,
    priceSource: 'allegro',
    processor: {
      id: 20335,
      model: 'Intel Core i7-6600U',
      series: 'Intel Core i7',
      cores: 2,
      frequency: 2.6,
      benchmark: {
        id: 1410,
        type: 'CPU',
        brand: 'Intel',
        model: 'Core i7-6600U',
        benchmark: 44.5,
        samples: 31982,
        url: 'https://cpu.userbenchmark.com/SpeedTest/36828/IntelR-CoreTM-i7-6600U-CPU---260GHz',
      },
    },
    screen: {
      id: 25362,
      diagonalScreenInches: 15.6,
      resolution: '1920 x 1080',
      screenFinish: 'matowa',
      screenType: 'IPS',
      refreshRate: null,
      touchScreen: false,
    },
    graphics: {
      id: 20335,
      graphicsCardModel: 'NVIDIA GeForce 940MX',
      graphicsCardType: 'Grafika dedykowana',
      graphicsCardVRam: null,
      benchmark: {
        id: 1560,
        type: 'GPU',
        brand: 'Nvidia',
        model: '940MX',
        benchmark: 9.76,
        samples: 38717,
        url: 'https://gpu.userbenchmark.com/SpeedTest/88506/NVIDIA-GeForce-940MX',
      },
    },
    communications: [
      {
        communicationName: 'Bluetooth',
      },
      {
        communicationName: 'LAN 10/100/1000 Mbps',
      },
      {
        communicationName: 'Wi-Fi',
      },
    ],
    multimedia: [],
    drives: [
      {
        driveType: 'brak',
      },
    ],
    connections: [
      {
        connectionName: 'USB 3.0',
      },
      {
        connectionName: 'Thunderbolt',
      },
      {
        connectionName: 'RJ-45',
      },
      {
        connectionName: 'minijack 3,5 mm (audio)',
      },
      {
        connectionName: 'HDMI',
      },
      {
        connectionName: 'złącze dokowania',
      },
    ],
    controls: [
      {
        controlName: 'klawiatura',
      },
      {
        controlName: 'klawiatura numeryczna',
      },
      {
        controlName: 'punkt dotykowy (TrackPoint)',
      },
      {
        controlName: 'touchpad',
      },
    ],
    images: [
      {
        id: 178101,
        url: 'https://a.allegroimg.com/original/110e94/a4e9008848e2a842a09a10bef0c6',
      },
      {
        id: 178102,
        url: 'https://a.allegroimg.com/original/11f42f/f21d6fef4362bb60fc2de673c7c8',
      },
      {
        id: 178103,
        url: 'https://a.allegroimg.com/original/11ff03/1f9865a8454b969196c8caa1d12a',
      },
      {
        id: 178104,
        url: 'https://a.allegroimg.com/original/110961/cfdac5944fe781917286fb834796',
      },
      {
        id: 178105,
        url: 'https://a.allegroimg.com/original/11ee92/cb59f4964faaa1f6bdfda59d1bb2',
      },
      {
        id: 178106,
        url: 'https://a.allegroimg.com/original/114fc6/5afced6e45b0b5a4d91a3e8fc1d4',
      },
      {
        id: 178107,
        url: 'https://a.allegroimg.com/original/11f6df/e713465f47a399cfb695e3552498',
      },
      {
        id: 178108,
        url: 'https://a.allegroimg.com/original/11c63a/a624bb3e4b189478ce7b3251a066',
      },
      {
        id: 178109,
        url: 'https://a.allegroimg.com/original/11bfc6/d11d0cb24d4687179f6ce7d6be98',
      },
      {
        id: 178110,
        url: 'https://a.allegroimg.com/original/1163ee/275e395c4abdb14e3df6ebe16fb2',
      },
      {
        id: 178111,
        url: 'https://a.allegroimg.com/original/1134ba/b48173394c408fb0912bc5d5c323',
      },
      {
        id: 178112,
        url: 'https://a.allegroimg.com/original/118862/52a4702c4ae4ab84a14406dbf911',
      },
      {
        id: 178113,
        url: 'https://a.allegroimg.com/original/11f78e/04812d5a482ba27b4a29f241d44c',
      },
      {
        id: 178114,
        url: 'https://a.allegroimg.com/original/114c7b/5ea6cc7741de9abac6844f27f987',
      },
      {
        id: 178115,
        url: 'https://a.allegroimg.com/original/118063/1e0fd9a944708d3a21901f2206ad',
      },
      {
        id: 178116,
        url: 'https://a.allegroimg.com/original/11ecde/879b670c46068e975a9fd80805dc',
      },
    ],
  },
  {
    id: '003bb070-d6d8-4c9d-a7b4-26f515c1ad4c',
    name: 'Laptop Lenovo Legion 5 17ACH6 17,3 " AMD Ryzen 5 16 GB / 1512 GB czarny',
    model: 'Legion 5 17ACH6',
    type: 'standardowy',
    producentCode: '82K0002SW',
    batterySizeWH: 80,
    batterySizeMAH: 5210,
    batteryTime: null,
    color: 'czarny',
    width: 40.3,
    length: 3.3,
    depth: 29,
    weight: 3,
    ramAmount: 16,
    ramFrequency: 3200,
    ramNumberOfSlots: 2,
    ramNumberOfFreeSlots: 0,
    ramType: 'DDR4',
    ramMaxAmount: 32,
    driveStorage: 1512,
    driveType: 'SSD',
    hddSpeed: null,
    price: 5499,
    priceSource: 'allegro',
    processor: {
      id: 20336,
      model: 'AMD Ryzen 5 5600H',
      series: 'AMD Ryzen 5',
      cores: 6,
      frequency: 3.3,
      benchmark: {
        id: 1361,
        type: 'CPU',
        brand: 'AMD',
        model: 'Ryzen 5 5600H',
        benchmark: 73,
        samples: 14333,
        url: 'https://cpu.userbenchmark.com/SpeedTest/1522632/AMD-Ryzen-5-5600H-with-Radeon-Graphics',
      },
    },
    screen: {
      id: 25363,
      diagonalScreenInches: 17.3,
      resolution: '1920 x 1080',
      screenFinish: 'matowa',
      screenType: 'IPS',
      refreshRate: 144,
      touchScreen: false,
    },
    graphics: {
      id: 20336,
      graphicsCardModel: 'NVIDIA GeForce RTX 3050',
      graphicsCardType: 'Grafika dedykowana',
      graphicsCardVRam: '4 GB',
      benchmark: {
        id: 1541,
        type: 'GPU',
        brand: 'Nvidia',
        model: 'RTX 3050 (Laptop)',
        benchmark: 53.7,
        samples: 3568,
        url: 'https://gpu.userbenchmark.com/SpeedTest/1570008/NVIDIA-GeForce-RTX-3050-Laptop-GPU',
      },
    },
    communications: [
      {
        communicationName: 'Bluetooth',
      },
      {
        communicationName: 'LAN 10/100/1000 Mbps',
      },
      {
        communicationName: 'Wi-Fi',
      },
    ],
    multimedia: [],
    drives: [
      {
        driveType: 'brak',
      },
    ],
    connections: [
      {
        connectionName: 'USB 3.1 typ C',
      },
      {
        connectionName: 'USB 3.1 typ A',
      },
      {
        connectionName: 'RJ-45',
      },
      {
        connectionName: 'minijack 3,5 mm (audio)',
      },
      {
        connectionName: 'HDMI',
      },
    ],
    controls: [
      {
        controlName: 'klawiatura',
      },
      {
        controlName: 'klawiatura podświetlana',
      },
      {
        controlName: 'klawiatura numeryczna',
      },
      {
        controlName: 'touchpad',
      },
    ],
    images: [
      {
        id: 178117,
        url: 'https://a.allegroimg.com/original/1148e2/024d6253439c932683115c28344f',
      },
      {
        id: 178118,
        url: 'https://a.allegroimg.com/original/11bfb0/a979e08543b88f158e4d41e442e0',
      },
      {
        id: 178119,
        url: 'https://a.allegroimg.com/original/11a91b/23ec23534341b72b84348bd2ca96',
      },
      {
        id: 178120,
        url: 'https://a.allegroimg.com/original/11bb04/fcfe9ba34f4aa4f8087ebbb7147c',
      },
      {
        id: 178121,
        url: 'https://a.allegroimg.com/original/11b119/fdf926174b4b8bf486ccd8a44149',
      },
      {
        id: 178122,
        url: 'https://a.allegroimg.com/original/11d0f4/b003d5994b1a9c02a450a80e1842',
      },
      {
        id: 178123,
        url: 'https://a.allegroimg.com/original/11f4f3/0b6d95fd42eb8f82cec1fe0bfdac',
      },
      {
        id: 178124,
        url: 'https://a.allegroimg.com/original/1184d8/14786bae467abaeb8162da2e8130',
      },
      {
        id: 178125,
        url: 'https://a.allegroimg.com/original/11c1e0/0b70382b499bb00fd5e6988eac78',
      },
      {
        id: 178126,
        url: 'https://3.allegroimg.com/original/032ec0/b2f4bbb242c8ac4c9ce82319d793',
      },
    ],
  },
  {
    id: '003d0482-5807-4589-808e-9674490aba58',
    name: 'Laptop Lenovo Ideapad 3-15ACH Gaming 15,6 " AMD Ryzen 5 32 GB / 2000 GB czarny',
    model: 'Ideapad 3-15ACH Gaming',
    type: 'standardowy',
    producentCode: '82K2014KPB',
    batterySizeWH: null,
    batterySizeMAH: 3910,
    batteryTime: null,
    color: 'czarny',
    width: 36,
    length: 2.4,
    depth: 25.2,
    weight: 2.25,
    ramAmount: 32,
    ramFrequency: 3200,
    ramNumberOfSlots: 2,
    ramNumberOfFreeSlots: null,
    ramType: 'DDR4',
    ramMaxAmount: 32,
    driveStorage: 2000,
    driveType: 'SSD',
    hddSpeed: null,
    price: 5072,
    priceSource: 'allegro',
    processor: {
      id: 20337,
      model: 'AMD Ryzen 5 5600H',
      series: 'AMD Ryzen 5',
      cores: 6,
      frequency: 3.3,
      benchmark: {
        id: 1361,
        type: 'CPU',
        brand: 'AMD',
        model: 'Ryzen 5 5600H',
        benchmark: 73,
        samples: 14333,
        url: 'https://cpu.userbenchmark.com/SpeedTest/1522632/AMD-Ryzen-5-5600H-with-Radeon-Graphics',
      },
    },
    screen: {
      id: 25364,
      diagonalScreenInches: 15.6,
      resolution: '1920 x 1080',
      screenFinish: 'antyrefleksyjna',
      screenType: 'IPS',
      refreshRate: 120,
      touchScreen: false,
    },
    graphics: {
      id: 20337,
      graphicsCardModel: 'NVIDIA GeForce GTX 1650',
      graphicsCardType: 'Grafika dedykowana',
      graphicsCardVRam: '4 GB',
      benchmark: {
        id: 1540,
        type: 'GPU',
        brand: 'Nvidia',
        model: 'GTX 1650 (Mobile)',
        benchmark: 41.4,
        samples: 75743,
        url: 'https://gpu.userbenchmark.com/SpeedTest/775280/NVIDIA-GeForce-GTX-1650',
      },
    },
    communications: [
      {
        communicationName: 'Bluetooth',
      },
      {
        communicationName: 'LAN 10/100/1000 Mbps',
      },
      {
        communicationName: 'Wi-Fi',
      },
    ],
    multimedia: [],
    drives: [
      {
        driveType: 'brak',
      },
    ],
    connections: [
      {
        connectionName: 'HDMI',
      },
      {
        connectionName: 'USB 3.1 typ C',
      },
      {
        connectionName: 'USB 3.1 typ A',
      },
      {
        connectionName: 'RJ-45',
      },
      {
        connectionName: 'minijack 3,5 mm (audio)',
      },
    ],
    controls: [
      {
        controlName: 'klawiatura',
      },
      {
        controlName: 'klawiatura numeryczna',
      },
      {
        controlName: 'klawiatura podświetlana',
      },
      {
        controlName: 'touchpad',
      },
    ],
    images: [
      {
        id: 178127,
        url: 'https://a.allegroimg.com/original/1138b0/f778afc34d3faea9de2053e283ef',
      },
      {
        id: 178128,
        url: 'https://a.allegroimg.com/original/11ff21/0dc44a3b4b1eb65551595cad178a',
      },
      {
        id: 178129,
        url: 'https://a.allegroimg.com/original/11d426/363a066b4b4d8142288b0e8953d7',
      },
      {
        id: 178130,
        url: 'https://a.allegroimg.com/original/11a48e/3803fa1344fd8e48293e519c820a',
      },
      {
        id: 178131,
        url: 'https://a.allegroimg.com/original/115a33/a82a2cb146298aadcb159acc0fb9',
      },
      {
        id: 178132,
        url: 'https://a.allegroimg.com/original/116bf2/2c4d33ea46c1902953e8fb1363b9',
      },
      {
        id: 178133,
        url: 'https://a.allegroimg.com/original/1159ec/d14ee3854cfabf7dfd5458f344d2',
      },
      {
        id: 178134,
        url: 'https://a.allegroimg.com/original/11486a/2e4816e34e17b17858f33f7ff312',
      },
      {
        id: 178135,
        url: 'https://a.allegroimg.com/original/116e22/caba118a4203a6183fd998ad5292',
      },
      {
        id: 178136,
        url: 'https://a.allegroimg.com/original/110a2e/6b4931b84406906c2bb00a858cb4',
      },
      {
        id: 178137,
        url: 'https://a.allegroimg.com/original/11f730/480124bf41b8a5747cc99217719b',
      },
      {
        id: 178138,
        url: 'https://a.allegroimg.com/original/11c5fd/8a0dc35c4027bc8aae4232dfc973',
      },
      {
        id: 178139,
        url: 'https://a.allegroimg.com/original/11e8ae/0b2cf9584acfa052badb488e9d6a',
      },
      {
        id: 178140,
        url: 'https://a.allegroimg.com/original/111829/6fe80efd46cfa26fc35499d6a44a',
      },
    ],
  },
  {
    id: '0041618d-5c98-489a-92b0-c7f6f54b0225',
    name: 'Laptop Lenovo T570 (T15) dotykowy laptop 15 cali z WINDOWS|METAL 15 " Intel Core i5 64 GB / 1024 GB czarny',
    model: 'T570 (T15) dotykowy laptop 15 cali z WINDOWS|METAL',
    type: 'standardowy',
    producentCode: 'Seria T, BLACK edt. Wersja PROFESSIONAL',
    batterySizeWH: null,
    batterySizeMAH: null,
    batteryTime: null,
    color: 'czarny',
    width: 36.7,
    length: 2.2,
    depth: 25.5,
    weight: 2.4,
    ramAmount: 64,
    ramFrequency: null,
    ramNumberOfSlots: 2,
    ramNumberOfFreeSlots: null,
    ramType: 'DDR4',
    ramMaxAmount: 64,
    driveStorage: 1024,
    driveType: 'SSD',
    hddSpeed: null,
    price: 4319.34,
    priceSource: 'allegro',
    processor: {
      id: 20338,
      model: 'Intel Core i5-7300U',
      series: 'Intel Core i5',
      cores: 2,
      frequency: 2.6,
      benchmark: {
        id: 1365,
        type: 'CPU',
        brand: 'Intel',
        model: 'Core i5-7300U',
        benchmark: 45,
        samples: 24421,
        url: 'https://cpu.userbenchmark.com/SpeedTest/223355/IntelR-CoreTM-i5-7300U-CPU---260GHz',
      },
    },
    screen: {
      id: 25365,
      diagonalScreenInches: 15,
      resolution: '1920 x 1080',
      screenFinish: 'matowa',
      screenType: 'IPS',
      refreshRate: null,
      touchScreen: false,
    },
    graphics: {
      id: 20338,
      graphicsCardModel: 'Intel HD Graphics 620',
      graphicsCardType: 'Grafika zintegrowana',
      graphicsCardVRam: 'współdzielona',
      benchmark: {
        id: 1539,
        type: 'GPU',
        brand: 'Intel',
        model: 'HD 620 (Mobile Kaby Lake)',
        benchmark: 4.59,
        samples: 378482,
        url: 'https://gpu.userbenchmark.com/SpeedTest/153579/IntelR-HD-Graphics-620',
      },
    },
    communications: [
      {
        communicationName: 'Bluetooth',
      },
      {
        communicationName: 'LAN 10/100/1000 Mbps',
      },
      {
        communicationName: 'Wi-Fi',
      },
    ],
    multimedia: [],
    drives: [],
    connections: [
      {
        connectionName: 'HDMI',
      },
      {
        connectionName: 'Thunderbolt',
      },
      {
        connectionName: 'RJ-45',
      },
      {
        connectionName: 'minijack 3,5 mm (audio)',
      },
      {
        connectionName: 'USB 3.1 typ C',
      },
      {
        connectionName: 'USB 3.1 typ A',
      },
      {
        connectionName: 'USB 3.0 typ C',
      },
      {
        connectionName: 'złącze dokowania',
      },
    ],
    controls: [
      {
        controlName: 'klawiatura',
      },
      {
        controlName: 'klawiatura numeryczna',
      },
      {
        controlName: 'punkt dotykowy (TrackPoint)',
      },
      {
        controlName: 'touchpad',
      },
    ],
    images: [
      {
        id: 178141,
        url: 'https://a.allegroimg.com/original/118d2a/0a14b19f4142b7283cee33e92d48',
      },
      {
        id: 178142,
        url: 'https://a.allegroimg.com/original/1127a6/ca391c3f4fe99ee2dc0a7b0d7440',
      },
      {
        id: 178143,
        url: 'https://a.allegroimg.com/original/114f99/4936e901409d938cc1d4c591ff05',
      },
      {
        id: 178144,
        url: 'https://a.allegroimg.com/original/11d41a/329407244f0c995bffead82828a1',
      },
      {
        id: 178145,
        url: 'https://a.allegroimg.com/original/11e340/3292e8d0472489a619ad11b34555',
      },
      {
        id: 178146,
        url: 'https://a.allegroimg.com/original/11f537/24b4c429478cb804c10c7519dd3e',
      },
      {
        id: 178147,
        url: 'https://a.allegroimg.com/original/111be1/c0fa10b147a1ac6419ac49dd4f8f',
      },
      {
        id: 178148,
        url: 'https://a.allegroimg.com/original/115362/9c43d15b4114aa3955b29a2787f1',
      },
      {
        id: 178149,
        url: 'https://a.allegroimg.com/original/116859/5a888fd1410dbf2391521eab43ca',
      },
      {
        id: 178150,
        url: 'https://a.allegroimg.com/original/1109b2/6556e3be447bb2184ddce0b5984b',
      },
      {
        id: 178151,
        url: 'https://a.allegroimg.com/original/115a97/49b00c914a75891cd304dbe7c3a6',
      },
      {
        id: 178152,
        url: 'https://a.allegroimg.com/original/11d336/dbbf7434472ca527276e4ac5ee0e',
      },
      {
        id: 178153,
        url: 'https://a.allegroimg.com/original/118862/577f2e3947929ff199a01938f5ac',
      },
      {
        id: 178154,
        url: 'https://a.allegroimg.com/original/11a281/f06a7fde445f83e0526754e49bcb',
      },
      {
        id: 178155,
        url: 'https://a.allegroimg.com/original/11d961/0f87b3354ced8fa24d2515fcabd3',
      },
      {
        id: 178156,
        url: 'https://a.allegroimg.com/original/112f9d/f45d2cf8497d961a5a4bc6d995c1',
      },
    ],
  },
  {
    id: '00754c9f-2ad7-4055-af06-883b137eec57',
    name: 'Laptop Lenovo Legion 5 15,6 " AMD Ryzen 7 8 GB / 512 GB czarny',
    model: 'Lenovo Legion 5',
    type: 'wzmocniony',
    producentCode: '82B1006UPB+1TBSSD',
    batterySizeWH: 60,
    batterySizeMAH: null,
    batteryTime: 7.1,
    color: 'czarny',
    width: null,
    length: null,
    depth: null,
    weight: 4.69,
    ramAmount: 8,
    ramFrequency: 3200,
    ramNumberOfSlots: null,
    ramNumberOfFreeSlots: null,
    ramType: 'DDR4',
    ramMaxAmount: 32,
    driveStorage: 512,
    driveType: 'SSD',
    hddSpeed: null,
    price: 5345,
    priceSource: 'allegro',
    processor: {
      id: 20339,
      model: 'AMD Ryzen 7 4800H',
      series: 'AMD Ryzen 7',
      cores: 8,
      frequency: 2.9,
      benchmark: {
        id: 1414,
        type: 'CPU',
        brand: 'AMD',
        model: 'Ryzen 7 4800H',
        benchmark: 73.9,
        samples: 24387,
        url: 'https://cpu.userbenchmark.com/SpeedTest/1032976/AMD-Ryzen-7-4800H-with-Radeon-Graphics',
      },
    },
    screen: {
      id: 25366,
      diagonalScreenInches: 15.6,
      resolution: '1920 x 1080',
      screenFinish: 'antyrefleksyjna',
      screenType: 'IPS',
      refreshRate: 120,
      touchScreen: false,
    },
    graphics: {
      id: 20339,
      graphicsCardModel: 'NVIDIA GeForce GTX 1660Ti',
      graphicsCardType: 'Grafika dedykowana',
      graphicsCardVRam: '6 GB',
      benchmark: {
        id: 1561,
        type: 'GPU',
        brand: 'Nvidia',
        model: 'GTX 1660-Ti (Mobile)',
        benchmark: 64.5,
        samples: 77861,
        url: 'https://gpu.userbenchmark.com/SpeedTest/776281/NVIDIA-GeForce-GTX-1660-Ti',
      },
    },
    communications: [
      {
        communicationName: 'Bluetooth',
      },
      {
        communicationName: 'LAN 10/100/1000 Mbps',
      },
      {
        communicationName: 'Wi-Fi',
      },
    ],
    multimedia: [],
    drives: [
      {
        driveType: 'brak',
      },
    ],
    connections: [
      {
        connectionName: 'RJ-45',
      },
      {
        connectionName: 'minijack 3,5 mm (audio)',
      },
      {
        connectionName: 'HDMI',
      },
      {
        connectionName: 'USB 3.1 typ C',
      },
      {
        connectionName: 'USB 3.1 typ A',
      },
    ],
    controls: [
      {
        controlName: 'klawiatura',
      },
      {
        controlName: 'klawiatura numeryczna',
      },
      {
        controlName: 'klawiatura podświetlana',
      },
    ],
    images: [
      {
        id: 178157,
        url: 'https://a.allegroimg.com/original/1170b2/e104b9254246b195537b4ca7de8a',
      },
      {
        id: 178158,
        url: 'https://a.allegroimg.com/original/113888/fdbe565447c7a731eaf353568481',
      },
      {
        id: 178159,
        url: 'https://a.allegroimg.com/original/111eb9/f6a0830342a09f1945438e8b3fdd',
      },
      {
        id: 178160,
        url: 'https://a.allegroimg.com/original/114d7f/542efa654396a9f0848d3604c882',
      },
      {
        id: 178161,
        url: 'https://a.allegroimg.com/original/115062/b4f2b84943e6a45f2f51e57ca677',
      },
      {
        id: 178162,
        url: 'https://a.allegroimg.com/original/117b97/09de31ed496c9c49369ee20eeb69',
      },
      {
        id: 178163,
        url: 'https://a.allegroimg.com/original/1110c2/ca6097c3424c862777e4d011b0ac',
      },
      {
        id: 178164,
        url: 'https://a.allegroimg.com/original/11edf2/6626a88a476a9b1e87ae41a3d948',
      },
      {
        id: 178165,
        url: 'https://a.allegroimg.com/original/1192ca/8c80338d47c5838344a5f9bdcb4f',
      },
      {
        id: 178166,
        url: 'https://a.allegroimg.com/original/11df96/44e23f4c49cd9bed2f2aa233b7fa',
      },
      {
        id: 178167,
        url: 'https://a.allegroimg.com/original/11558a/5fcfc4134b0d8a0a46632e74bf64',
      },
      {
        id: 178168,
        url: 'https://a.allegroimg.com/original/11bd33/b16f18ec4fdaae72361f80a8dfff',
      },
      {
        id: 178169,
        url: 'https://a.allegroimg.com/original/1128b9/88aa1450436db038eae0e8aafa29',
      },
      {
        id: 178170,
        url: 'https://a.allegroimg.com/original/114428/bb3d0c08469d9e88ada70ec28088',
      },
      {
        id: 178171,
        url: 'https://a.allegroimg.com/original/110006/8ea13e3a4356962c65f89c74d284',
      },
      {
        id: 178172,
        url: 'https://a.allegroimg.com/original/11ce9a/b037369f4b7b9f50880abbc5598a',
      },
      {
        id: 178173,
        url: 'https://a.allegroimg.com/original/117f1c/87d577394829b46d03f15aeb16fd',
      },
    ],
  },
  {
    id: '0096db59-0b7c-4e6e-8969-16b6d483880c',
    name: 'Laptop Lenovo IdeaPad Gaming 3 15,6 " AMD Ryzen 5 8 GB / 1256 GB czarny',
    model: 'IdeaPad Gaming 3',
    type: 'standardowy',
    producentCode: '82K200NPPB',
    batterySizeWH: 45,
    batterySizeMAH: null,
    batteryTime: null,
    color: 'czarny',
    width: 35.9,
    length: 2.4,
    depth: 25.2,
    weight: 2.3,
    ramAmount: 8,
    ramFrequency: 3200,
    ramNumberOfSlots: null,
    ramNumberOfFreeSlots: null,
    ramType: 'DDR4',
    ramMaxAmount: null,
    driveStorage: 1256,
    driveType: 'SSD + HDD',
    hddSpeed: null,
    price: 3949,
    priceSource: 'allegro',
    processor: {
      id: 20340,
      model: 'AMD Ryzen 5 5600H',
      series: 'AMD Ryzen 5',
      cores: 6,
      frequency: 3.3,
      benchmark: {
        id: 1361,
        type: 'CPU',
        brand: 'AMD',
        model: 'Ryzen 5 5600H',
        benchmark: 73,
        samples: 14333,
        url: 'https://cpu.userbenchmark.com/SpeedTest/1522632/AMD-Ryzen-5-5600H-with-Radeon-Graphics',
      },
    },
    screen: {
      id: 25367,
      diagonalScreenInches: 15.6,
      resolution: '1920 x 1080',
      screenFinish: 'matowa',
      screenType: 'IPS',
      refreshRate: 60,
      touchScreen: false,
    },
    graphics: {
      id: 20340,
      graphicsCardModel: 'NVIDIA GeForce RTX 3050Ti',
      graphicsCardType: 'Grafika dedykowana',
      graphicsCardVRam: '4 GB',
      benchmark: {
        id: 1537,
        type: 'GPU',
        brand: 'Nvidia',
        model: 'RTX 3050-Ti (Laptop)',
        benchmark: 58.5,
        samples: 14683,
        url: 'https://gpu.userbenchmark.com/SpeedTest/1559532/NVIDIA-GeForce-RTX-3050-Ti-Laptop-GPU',
      },
    },
    communications: [
      {
        communicationName: 'Bluetooth',
      },
      {
        communicationName: 'LAN 10/100/1000 Mbps',
      },
      {
        communicationName: 'Wi-Fi',
      },
    ],
    multimedia: [],
    drives: [
      {
        driveType: 'brak',
      },
    ],
    connections: [
      {
        connectionName: 'USB 3.0 typ C',
      },
      {
        connectionName: 'USB 3.0 typ A',
      },
      {
        connectionName: 'RJ-45',
      },
      {
        connectionName: 'minijack 3,5 mm (audio)',
      },
      {
        connectionName: 'HDMI',
      },
    ],
    controls: [
      {
        controlName: 'klawiatura',
      },
      {
        controlName: 'klawiatura numeryczna',
      },
      {
        controlName: 'touchpad',
      },
      {
        controlName: 'klawiatura podświetlana',
      },
    ],
    images: [
      {
        id: 178174,
        url: 'https://a.allegroimg.com/original/1165f5/2585d17843a08fb760e6c41817ef',
      },
      {
        id: 178175,
        url: 'https://a.allegroimg.com/original/110203/76a0ff70407fbe887ee16cb5e99e',
      },
      {
        id: 178176,
        url: 'https://a.allegroimg.com/original/11cf6c/c89751a549d39ac8eba732a432ff',
      },
      {
        id: 178177,
        url: 'https://a.allegroimg.com/original/117e3a/30f9c1d4483fa80fc407181cb18e',
      },
      {
        id: 178178,
        url: 'https://a.allegroimg.com/original/110d91/cb2843e84ed799f1221facf5debc',
      },
      {
        id: 178179,
        url: 'https://a.allegroimg.com/original/116a3f/1908abf2401abb4e39b2a063597c',
      },
      {
        id: 178180,
        url: 'https://a.allegroimg.com/original/11244f/696fdb20440e84b4c0096060b12e',
      },
      {
        id: 178181,
        url: 'https://a.allegroimg.com/original/11d185/c3f530cc465f9f583a2a5e0d32bf',
      },
      {
        id: 178182,
        url: 'https://a.allegroimg.com/original/11bc71/d4817548481a92d1820fd3482dce',
      },
      {
        id: 178183,
        url: 'https://a.allegroimg.com/original/117594/ebcebec04df7bf3c3c51a94f441c',
      },
      {
        id: 178184,
        url: 'https://a.allegroimg.com/original/11bc9a/803060894e2bbe9179d840cbc892',
      },
    ],
  },
  {
    id: '00e57174-4790-4c12-b2bc-82b2b46e3766',
    name: 'Laptop Lenovo IdeaPad 3 15ITL6 15,6 " Intel Core i5 12 GB / 1500 GB szary',
    model: 'IdeaPad 3 15ITL6',
    type: 'standardowy',
    producentCode: '82H801QSPB',
    batterySizeWH: 38,
    batterySizeMAH: 4947,
    batteryTime: null,
    color: 'szary',
    width: 36,
    length: 2,
    depth: 23.7,
    weight: 1.7,
    ramAmount: 12,
    ramFrequency: 3200,
    ramNumberOfSlots: 1,
    ramNumberOfFreeSlots: 0,
    ramType: 'DDR4',
    ramMaxAmount: 20,
    driveStorage: 1500,
    driveType: 'SSD + HDD',
    hddSpeed: 5400,
    price: 3199,
    priceSource: 'allegro',
    processor: {
      id: 20341,
      model: 'Intel Core i5-1135G7',
      series: 'Intel Core i5',
      cores: 4,
      frequency: 2.4,
      benchmark: {
        id: 1357,
        type: 'CPU',
        brand: 'Intel',
        model: 'Core i5-1135G7',
        benchmark: 60.2,
        samples: 65911,
        url: 'https://cpu.userbenchmark.com/SpeedTest/1286124/11th-Gen-IntelR-CoreTM-i5-1135G7---240GHz',
      },
    },
    screen: {
      id: 25368,
      diagonalScreenInches: 15.6,
      resolution: '1920 x 1080',
      screenFinish: 'matowa',
      screenType: 'IPS',
      refreshRate: 60,
      touchScreen: false,
    },
    graphics: {
      id: 20341,
      graphicsCardModel: 'Intel Iris Xe Graphics',
      graphicsCardType: 'Grafika zintegrowana',
      graphicsCardVRam: 'współdzielona',
      benchmark: {
        id: 1532,
        type: 'GPU',
        brand: 'Intel',
        model: 'Iris Xe',
        benchmark: 16.2,
        samples: 132339,
        url: 'https://gpu.userbenchmark.com/SpeedTest/1268515/IntelR-IrisR-Xe-Graphics',
      },
    },
    communications: [
      {
        communicationName: 'Bluetooth',
      },
      {
        communicationName: 'Wi-Fi',
      },
    ],
    multimedia: [],
    drives: [
      {
        driveType: 'brak',
      },
    ],
    connections: [
      {
        connectionName: 'HDMI',
      },
      {
        connectionName: 'USB 2.0',
      },
      {
        connectionName: 'minijack 3,5 mm (audio)',
      },
      {
        connectionName: 'USB 3.1 typ C',
      },
      {
        connectionName: 'USB 3.1 typ A',
      },
    ],
    controls: [
      {
        controlName: 'klawiatura',
      },
      {
        controlName: 'klawiatura numeryczna',
      },
      {
        controlName: 'touchpad',
      },
    ],
    images: [
      {
        id: 178185,
        url: 'https://a.allegroimg.com/original/114c14/d94e39f14109a8fa18e7a3a44df5',
      },
      {
        id: 178186,
        url: 'https://a.allegroimg.com/original/116403/5585c4f949fc94f48c24db033ede',
      },
      {
        id: 178187,
        url: 'https://a.allegroimg.com/original/11d158/182a09784c2b9a79a2d2491f81a2',
      },
      {
        id: 178188,
        url: 'https://a.allegroimg.com/original/113f94/a6321eb34930b07b5d91145d56e7',
      },
      {
        id: 178189,
        url: 'https://a.allegroimg.com/original/116a78/72fb7de548a78d98a41fd6e1e30f',
      },
      {
        id: 178190,
        url: 'https://a.allegroimg.com/original/113e83/e2b0071845bfa4cb498d6f6ecb84',
      },
      {
        id: 178191,
        url: 'https://a.allegroimg.com/original/1163d1/a35aee1c48fda67a1a391fade7e2',
      },
      {
        id: 178192,
        url: 'https://a.allegroimg.com/original/118506/bd29dba347d6a6510e095f1e884c',
      },
      {
        id: 178193,
        url: 'https://3.allegroimg.com/original/032ec0/b2f4bbb242c8ac4c9ce82319d793',
      },
    ],
  },
  {
    id: '01044ac2-3e67-40d1-8597-ec7ec582f78f',
    name: 'Laptop HP 17-cn0097 17,3" Intel Core i7 32 GB / 1256 GB czarny',
    model: 'HP 17-cn0097',
    type: 'standardowy',
    producentCode: 'HP 17 i7-1165G7 32GB 256+1TB FHD IPS W11',
    batterySizeWH: 41,
    batterySizeMAH: null,
    batteryTime: null,
    color: 'czarny',
    width: 40.07,
    length: 2.06,
    depth: 25.78,
    weight: 2.05,
    ramAmount: 32,
    ramFrequency: 3200,
    ramNumberOfSlots: null,
    ramNumberOfFreeSlots: null,
    ramType: 'DDR4',
    ramMaxAmount: null,
    driveStorage: 1256,
    driveType: 'SSD + HDD',
    hddSpeed: null,
    price: 4100,
    priceSource: 'allegro',
    processor: {
      id: 22126,
      model: 'Intel Core i7-1165G7',
      series: 'Intel Core i7',
      cores: 4,
      frequency: 2.8,
      benchmark: {
        id: 1368,
        type: 'CPU',
        brand: 'Intel',
        model: 'Core i7-1165G7',
        benchmark: 63.2,
        samples: 56440,
        url: 'https://cpu.userbenchmark.com/SpeedTest/1195374/11th-Gen-IntelR-CoreTM-i7-1165G7---280GHz',
      },
    },
    screen: {
      id: 27153,
      diagonalScreenInches: 17.3,
      resolution: '1920 x 1080',
      screenFinish: 'matowa',
      screenType: 'IPS',
      refreshRate: null,
      touchScreen: false,
    },
    graphics: {
      id: 22126,
      graphicsCardModel: 'Intel Iris Xe Graphics',
      graphicsCardType: 'Grafika zintegrowana',
      graphicsCardVRam: 'współdzielona',
      benchmark: {
        id: 1532,
        type: 'GPU',
        brand: 'Intel',
        model: 'Iris Xe',
        benchmark: 16.2,
        samples: 132339,
        url: 'https://gpu.userbenchmark.com/SpeedTest/1268515/IntelR-IrisR-Xe-Graphics',
      },
    },
    communications: [
      {
        communicationName: 'Bluetooth',
      },
      {
        communicationName: 'Wi-Fi',
      },
    ],
    multimedia: [],
    drives: [
      {
        driveType: 'brak',
      },
    ],
    connections: [
      {
        connectionName: 'USB 3.1 typ A',
      },
      {
        connectionName: 'minijack 3,5 mm (audio)',
      },
      {
        connectionName: 'HDMI',
      },
      {
        connectionName: 'USB 3.1 typ C',
      },
    ],
    controls: [
      {
        controlName: 'klawiatura',
      },
      {
        controlName: 'klawiatura numeryczna',
      },
      {
        controlName: 'touchpad',
      },
    ],
    images: [
      {
        id: 193106,
        url: 'https://a.allegroimg.com/original/118838/d13c1c8140ceac3b1e41623c6e55',
      },
      {
        id: 193107,
        url: 'https://a.allegroimg.com/original/11b527/846348864e1ebb53dbea3d5d88cb',
      },
      {
        id: 193108,
        url: 'https://a.allegroimg.com/original/11e588/87d1041a47e8b72d2db486a31251',
      },
      {
        id: 193109,
        url: 'https://a.allegroimg.com/original/11b8e8/f7139bc246fc800ca0f2eba17594',
      },
      {
        id: 193110,
        url: 'https://a.allegroimg.com/original/11f976/c7f6d91f47f1b6934df98a5a241b',
      },
      {
        id: 193111,
        url: 'https://a.allegroimg.com/original/110222/aa525a4d49d385ca116a65878a20',
      },
      {
        id: 193112,
        url: 'https://a.allegroimg.com/original/11772e/5f940da74e16aab2b5032ecc9c59',
      },
      {
        id: 193113,
        url: 'https://a.allegroimg.com/original/11a19d/1e8dd64646f8806b3efd120ae181',
      },
      {
        id: 193114,
        url: 'https://a.allegroimg.com/original/1138d9/3b34836f408694b50c82a1f6b268',
      },
      {
        id: 193115,
        url: 'https://a.allegroimg.com/original/114b59/93889c854d3c9479fd3409be4b5b',
      },
      {
        id: 193116,
        url: 'https://a.allegroimg.com/original/11ae41/77ff59ff41cfb2cf6ce8da5bb557',
      },
      {
        id: 193117,
        url: 'https://a.allegroimg.com/original/1124bf/a155a016420fa8e27d4526f8bf66',
      },
      {
        id: 193118,
        url: 'https://a.allegroimg.com/original/1170b2/e6e56ab94cd99fec6cefb1b1fade',
      },
    ],
  },
  {
    id: '00165799-3fa6-4d76-8581-873a49dd29c6',
    name: 'Laptop HP Pavilion Gaming 17-cd2000 17,3" Intel Core i5 32 GB / 2048 GB czarny',
    model: 'Pavilion Gaming 17-cd2000',
    type: 'standardowy',
    producentCode: '4H3A5EA',
    batterySizeWH: 52.5,
    batterySizeMAH: 4550,
    batteryTime: null,
    color: 'czarny',
    width: 40.5,
    length: 2.9,
    depth: 28.2,
    weight: 2.85,
    ramAmount: 32,
    ramFrequency: 3200,
    ramNumberOfSlots: 2,
    ramNumberOfFreeSlots: 0,
    ramType: 'DDR4',
    ramMaxAmount: 32,
    driveStorage: 2048,
    driveType: 'SSD',
    hddSpeed: null,
    price: 5999,
    priceSource: 'allegro',
    processor: {
      id: 22328,
      model: 'Intel Core i5-11300H',
      series: 'Intel Core i5',
      cores: 4,
      frequency: 3.1,
      benchmark: {
        id: 1367,
        type: 'CPU',
        brand: 'Intel',
        model: 'Core i5-11300H',
        benchmark: 66.4,
        samples: 9619,
        url: 'https://cpu.userbenchmark.com/SpeedTest/1504890/11th-Gen-IntelR-CoreTM-i5-11300H---310GHz',
      },
    },
    screen: {
      id: 27355,
      diagonalScreenInches: 17.3,
      resolution: '1920 x 1080',
      screenFinish: 'antyrefleksyjna',
      screenType: 'IPS',
      refreshRate: 144,
      touchScreen: false,
    },
    graphics: {
      id: 22328,
      graphicsCardModel: 'NVIDIA GeForce RTX 3050',
      graphicsCardType: 'Grafika dedykowana',
      graphicsCardVRam: '4 GB',
      benchmark: {
        id: 1541,
        type: 'GPU',
        brand: 'Nvidia',
        model: 'RTX 3050 (Laptop)',
        benchmark: 53.7,
        samples: 3568,
        url: 'https://gpu.userbenchmark.com/SpeedTest/1570008/NVIDIA-GeForce-RTX-3050-Laptop-GPU',
      },
    },
    communications: [
      {
        communicationName: 'Bluetooth',
      },
      {
        communicationName: 'LAN 10/100/1000 Mbps',
      },
      {
        communicationName: 'Wi-Fi',
      },
    ],
    multimedia: [],
    drives: [
      {
        driveType: 'brak',
      },
    ],
    connections: [
      {
        connectionName: 'RJ-45',
      },
      {
        connectionName: 'minijack 3,5 mm (audio)',
      },
      {
        connectionName: 'HDMI',
      },
      {
        connectionName: 'USB 3.1 typ C',
      },
      {
        connectionName: 'USB 3.1 typ A',
      },
      {
        connectionName: 'USB 2.0 typ A',
      },
    ],
    controls: [
      {
        controlName: 'klawiatura',
      },
      {
        controlName: 'klawiatura numeryczna',
      },
      {
        controlName: 'klawiatura podświetlana',
      },
      {
        controlName: 'touchpad',
      },
    ],
    images: [
      {
        id: 194939,
        url: 'https://a.allegroimg.com/original/11698d/cfd2b8854b8aad50bd33ab8ba51b',
      },
      {
        id: 194940,
        url: 'https://a.allegroimg.com/original/1162d3/a17dd9154b58b11daaa7ee6bad78',
      },
      {
        id: 194941,
        url: 'https://a.allegroimg.com/original/119f4c/037be20943459de580ccc231e819',
      },
      {
        id: 194942,
        url: 'https://a.allegroimg.com/original/11f0cc/25f182ca4c1eb6becfe2b3d18dc9',
      },
      {
        id: 194943,
        url: 'https://a.allegroimg.com/original/117acb/58d7c11446b8bd0a4b7992542869',
      },
      {
        id: 194944,
        url: 'https://a.allegroimg.com/original/11326c/314b1d04480dbc7bd112a0586174',
      },
      {
        id: 194945,
        url: 'https://a.allegroimg.com/original/11752c/6fdada6443e39da68f61218d2bdf',
      },
      {
        id: 194946,
        url: 'https://a.allegroimg.com/original/11af7e/b8816e1e442a856211d923ca910f',
      },
      {
        id: 194947,
        url: 'https://a.allegroimg.com/original/11b88c/0fe7d56c479f8d67aa3e3496d569',
      },
      {
        id: 194948,
        url: 'https://a.allegroimg.com/original/11d920/30b1c1124849bc45af479e0d1aad',
      },
    ],
  },
  {
    id: '005fb9a3-872a-45c1-9555-c01d76b24777',
    name: 'Laptop HP Pavilion Gaming 17-cd2000 17,3" Intel Core i5 32 GB / 1256 GB czarny',
    model: 'Pavilion Gaming 17-cd2000',
    type: 'standardowy',
    producentCode: '5A5L4EA',
    batterySizeWH: 52.5,
    batterySizeMAH: 4550,
    batteryTime: null,
    color: 'czarny',
    width: 40.5,
    length: 2.9,
    depth: 28.2,
    weight: 2.85,
    ramAmount: 32,
    ramFrequency: 3200,
    ramNumberOfSlots: 2,
    ramNumberOfFreeSlots: 0,
    ramType: 'DDR4',
    ramMaxAmount: 32,
    driveStorage: 1256,
    driveType: 'SSD',
    hddSpeed: null,
    price: 5599,
    priceSource: 'allegro',
    processor: {
      id: 22329,
      model: 'Intel Core i5-11300H',
      series: 'Intel Core i5',
      cores: 4,
      frequency: 3.1,
      benchmark: {
        id: 1367,
        type: 'CPU',
        brand: 'Intel',
        model: 'Core i5-11300H',
        benchmark: 66.4,
        samples: 9619,
        url: 'https://cpu.userbenchmark.com/SpeedTest/1504890/11th-Gen-IntelR-CoreTM-i5-11300H---310GHz',
      },
    },
    screen: {
      id: 27356,
      diagonalScreenInches: 17.3,
      resolution: '1920 x 1080',
      screenFinish: 'antyrefleksyjna',
      screenType: 'IPS',
      refreshRate: 144,
      touchScreen: false,
    },
    graphics: {
      id: 22329,
      graphicsCardModel: 'NVIDIA GeForce RTX 3050Ti',
      graphicsCardType: 'Grafika dedykowana',
      graphicsCardVRam: '4 GB',
      benchmark: {
        id: 1537,
        type: 'GPU',
        brand: 'Nvidia',
        model: 'RTX 3050-Ti (Laptop)',
        benchmark: 58.5,
        samples: 14683,
        url: 'https://gpu.userbenchmark.com/SpeedTest/1559532/NVIDIA-GeForce-RTX-3050-Ti-Laptop-GPU',
      },
    },
    communications: [
      {
        communicationName: 'Bluetooth',
      },
      {
        communicationName: 'LAN 10/100/1000 Mbps',
      },
      {
        communicationName: 'Wi-Fi',
      },
    ],
    multimedia: [],
    drives: [
      {
        driveType: 'brak',
      },
    ],
    connections: [
      {
        connectionName: 'minijack 3,5 mm (audio)',
      },
      {
        connectionName: 'HDMI',
      },
      {
        connectionName: 'USB 3.1 typ C',
      },
      {
        connectionName: 'USB 3.1 typ A',
      },
      {
        connectionName: 'USB 2.0 typ A',
      },
      {
        connectionName: 'RJ-45',
      },
    ],
    controls: [
      {
        controlName: 'klawiatura',
      },
      {
        controlName: 'klawiatura numeryczna',
      },
      {
        controlName: 'klawiatura podświetlana',
      },
      {
        controlName: 'touchpad',
      },
    ],
    images: [
      {
        id: 194949,
        url: 'https://a.allegroimg.com/original/113cc6/f8a3313f49c1acb2d02729834ce8',
      },
      {
        id: 194950,
        url: 'https://a.allegroimg.com/original/1162d3/a17dd9154b58b11daaa7ee6bad78',
      },
      {
        id: 194951,
        url: 'https://a.allegroimg.com/original/119f4c/037be20943459de580ccc231e819',
      },
      {
        id: 194952,
        url: 'https://a.allegroimg.com/original/11f0cc/25f182ca4c1eb6becfe2b3d18dc9',
      },
      {
        id: 194953,
        url: 'https://a.allegroimg.com/original/117acb/58d7c11446b8bd0a4b7992542869',
      },
      {
        id: 194954,
        url: 'https://a.allegroimg.com/original/11326c/314b1d04480dbc7bd112a0586174',
      },
      {
        id: 194955,
        url: 'https://a.allegroimg.com/original/11752c/6fdada6443e39da68f61218d2bdf',
      },
      {
        id: 194956,
        url: 'https://a.allegroimg.com/original/11af7e/b8816e1e442a856211d923ca910f',
      },
      {
        id: 194957,
        url: 'https://a.allegroimg.com/original/11b88c/0fe7d56c479f8d67aa3e3496d569',
      },
      {
        id: 194958,
        url: 'https://a.allegroimg.com/original/11d920/30b1c1124849bc45af479e0d1aad',
      },
    ],
  },
  {
    id: '006f0a71-9535-4ed1-b19e-ff5163113441',
    name: 'Laptop HP Pavilion 14-dv0000nv 14" Intel Core i7 16 GB / 512 GB srebrny',
    model: 'HP Pavilion 14-dv0000nv',
    type: 'standardowy',
    producentCode: '2U5W7EA',
    batterySizeWH: 43,
    batterySizeMAH: null,
    batteryTime: null,
    color: 'srebrny',
    width: 32.5,
    length: 1.7,
    depth: 21.64,
    weight: 1.41,
    ramAmount: 16,
    ramFrequency: 3200,
    ramNumberOfSlots: 2,
    ramNumberOfFreeSlots: 0,
    ramType: 'DDR4',
    ramMaxAmount: 32,
    driveStorage: 512,
    driveType: 'SSD',
    hddSpeed: null,
    price: 3399,
    priceSource: 'allegro',
    processor: {
      id: 22330,
      model: 'Intel Core i7-1165G7',
      series: 'Intel Core i7',
      cores: 4,
      frequency: 2.8,
      benchmark: {
        id: 1368,
        type: 'CPU',
        brand: 'Intel',
        model: 'Core i7-1165G7',
        benchmark: 63.2,
        samples: 56440,
        url: 'https://cpu.userbenchmark.com/SpeedTest/1195374/11th-Gen-IntelR-CoreTM-i7-1165G7---280GHz',
      },
    },
    screen: {
      id: 27357,
      diagonalScreenInches: 14,
      resolution: '1920 x 1080',
      screenFinish: 'antyrefleksyjna',
      screenType: 'IPS',
      refreshRate: null,
      touchScreen: false,
    },
    graphics: {
      id: 22330,
      graphicsCardModel: 'Intel Iris Xe Graphics',
      graphicsCardType: 'Grafika zintegrowana',
      graphicsCardVRam: 'współdzielona',
      benchmark: {
        id: 1532,
        type: 'GPU',
        brand: 'Intel',
        model: 'Iris Xe',
        benchmark: 16.2,
        samples: 132339,
        url: 'https://gpu.userbenchmark.com/SpeedTest/1268515/IntelR-IrisR-Xe-Graphics',
      },
    },
    communications: [
      {
        communicationName: 'Bluetooth',
      },
      {
        communicationName: 'Wi-Fi',
      },
    ],
    multimedia: [],
    drives: [
      {
        driveType: 'brak',
      },
    ],
    connections: [
      {
        connectionName: 'minijack 3,5 mm (audio)',
      },
      {
        connectionName: 'HDMI',
      },
      {
        connectionName: 'USB 3.1 typ C',
      },
      {
        connectionName: 'USB 3.1 typ A',
      },
    ],
    controls: [
      {
        controlName: 'touchpad',
      },
      {
        controlName: 'klawiatura podświetlana',
      },
      {
        controlName: 'klawiatura',
      },
    ],
    images: [
      {
        id: 194959,
        url: 'https://a.allegroimg.com/original/119062/89c6054e4aa7935ba5c7049d9274',
      },
      {
        id: 194960,
        url: 'https://a.allegroimg.com/original/11c37a/991870504b95903c92decda7833d',
      },
      {
        id: 194961,
        url: 'https://a.allegroimg.com/original/11fdde/3d3a92294eb0810d940325f66602',
      },
      {
        id: 194962,
        url: 'https://a.allegroimg.com/original/117cc7/6f69888e4257b9c9e9a7bedc989c',
      },
      {
        id: 194963,
        url: 'https://a.allegroimg.com/original/117790/60e82a304d83bd377d1059b13468',
      },
      {
        id: 194964,
        url: 'https://a.allegroimg.com/original/11d6aa/70d10b264d1eaa32e7b47b703ec4',
      },
    ],
  },
  {
    id: '00b826aa-9803-49a6-90ee-4312bb993306',
    name: 'Laptop HP Pavilion Gaming 17-cd2000 17,3" Intel Core i5 16 GB / 2024 GB czarny',
    model: 'Pavilion Gaming 17-cd2000',
    type: 'standardowy',
    producentCode: '4Y112W',
    batterySizeWH: 52.5,
    batterySizeMAH: 4550,
    batteryTime: null,
    color: 'czarny',
    width: 40.5,
    length: 2.9,
    depth: 28.2,
    weight: 2.85,
    ramAmount: 16,
    ramFrequency: 3200,
    ramNumberOfSlots: 2,
    ramNumberOfFreeSlots: 0,
    ramType: 'DDR4',
    ramMaxAmount: 32,
    driveStorage: 2024,
    driveType: 'SSD',
    hddSpeed: null,
    price: 5499,
    priceSource: 'allegro',
    processor: {
      id: 22331,
      model: 'Intel Core i5-11300H',
      series: 'Intel Core i5',
      cores: 4,
      frequency: 3.1,
      benchmark: {
        id: 1367,
        type: 'CPU',
        brand: 'Intel',
        model: 'Core i5-11300H',
        benchmark: 66.4,
        samples: 9619,
        url: 'https://cpu.userbenchmark.com/SpeedTest/1504890/11th-Gen-IntelR-CoreTM-i5-11300H---310GHz',
      },
    },
    screen: {
      id: 27358,
      diagonalScreenInches: 17.3,
      resolution: '1920 x 1080',
      screenFinish: 'antyrefleksyjna',
      screenType: 'IPS',
      refreshRate: 144,
      touchScreen: false,
    },
    graphics: {
      id: 22331,
      graphicsCardModel: 'NVIDIA GeForce RTX 3050',
      graphicsCardType: 'Grafika dedykowana',
      graphicsCardVRam: '4 GB',
      benchmark: {
        id: 1541,
        type: 'GPU',
        brand: 'Nvidia',
        model: 'RTX 3050 (Laptop)',
        benchmark: 53.7,
        samples: 3568,
        url: 'https://gpu.userbenchmark.com/SpeedTest/1570008/NVIDIA-GeForce-RTX-3050-Laptop-GPU',
      },
    },
    communications: [
      {
        communicationName: 'Bluetooth',
      },
      {
        communicationName: 'LAN 10/100/1000 Mbps',
      },
      {
        communicationName: 'Wi-Fi',
      },
    ],
    multimedia: [],
    drives: [
      {
        driveType: 'brak',
      },
    ],
    connections: [
      {
        connectionName: 'USB 2.0 typ A',
      },
      {
        connectionName: 'RJ-45',
      },
      {
        connectionName: 'minijack 3,5 mm (audio)',
      },
      {
        connectionName: 'HDMI',
      },
      {
        connectionName: 'USB 3.1 typ C',
      },
      {
        connectionName: 'USB 3.1 typ A',
      },
    ],
    controls: [
      {
        controlName: 'klawiatura',
      },
      {
        controlName: 'klawiatura numeryczna',
      },
      {
        controlName: 'klawiatura podświetlana',
      },
      {
        controlName: 'touchpad',
      },
    ],
    images: [
      {
        id: 194965,
        url: 'https://a.allegroimg.com/original/113cc6/f8a3313f49c1acb2d02729834ce8',
      },
      {
        id: 194966,
        url: 'https://a.allegroimg.com/original/1162d3/a17dd9154b58b11daaa7ee6bad78',
      },
      {
        id: 194967,
        url: 'https://a.allegroimg.com/original/119f4c/037be20943459de580ccc231e819',
      },
      {
        id: 194968,
        url: 'https://a.allegroimg.com/original/11f0cc/25f182ca4c1eb6becfe2b3d18dc9',
      },
      {
        id: 194969,
        url: 'https://a.allegroimg.com/original/117acb/58d7c11446b8bd0a4b7992542869',
      },
      {
        id: 194970,
        url: 'https://a.allegroimg.com/original/11326c/314b1d04480dbc7bd112a0586174',
      },
      {
        id: 194971,
        url: 'https://a.allegroimg.com/original/11752c/6fdada6443e39da68f61218d2bdf',
      },
      {
        id: 194972,
        url: 'https://a.allegroimg.com/original/11af7e/b8816e1e442a856211d923ca910f',
      },
      {
        id: 194973,
        url: 'https://a.allegroimg.com/original/11b88c/0fe7d56c479f8d67aa3e3496d569',
      },
      {
        id: 194974,
        url: 'https://a.allegroimg.com/original/11d920/30b1c1124849bc45af479e0d1aad',
      },
    ],
  },
  {
    id: '00e802c2-6b75-4b7d-92d9-82b5894761bc',
    name: 'Laptop HP Pavilion Gaming 15-ec2000 15,6" AMD Ryzen 7 16 GB / 1024 GB czarny',
    model: 'Pavilion Gaming 15-ec2000',
    type: 'standardowy',
    producentCode: '5T5U1EA',
    batterySizeWH: 52,
    batterySizeMAH: 4300,
    batteryTime: null,
    color: 'czarny',
    width: 36,
    length: 2.8,
    depth: 25.8,
    weight: 2.19,
    ramAmount: 16,
    ramFrequency: 3200,
    ramNumberOfSlots: 2,
    ramNumberOfFreeSlots: 0,
    ramType: 'DDR4',
    ramMaxAmount: 32,
    driveStorage: 1024,
    driveType: 'SSD',
    hddSpeed: null,
    price: 4874,
    priceSource: 'allegro',
    processor: {
      id: 22332,
      model: 'AMD Ryzen 7 5800H',
      series: 'AMD Ryzen 7',
      cores: 8,
      frequency: 3.2,
      benchmark: {
        id: 1359,
        type: 'CPU',
        brand: 'AMD',
        model: 'Ryzen 7 5800H',
        benchmark: 75.1,
        samples: 20860,
        url: 'https://cpu.userbenchmark.com/SpeedTest/1442974/AMD-Ryzen-7-5800H-with-Radeon-Graphics',
      },
    },
    screen: {
      id: 27359,
      diagonalScreenInches: 15.6,
      resolution: '1920 x 1080',
      screenFinish: 'antyrefleksyjna',
      screenType: 'IPS',
      refreshRate: 144,
      touchScreen: false,
    },
    graphics: {
      id: 22332,
      graphicsCardModel: 'NVIDIA GeForce RTX 3050',
      graphicsCardType: 'Grafika dedykowana',
      graphicsCardVRam: '4 GB',
      benchmark: {
        id: 1541,
        type: 'GPU',
        brand: 'Nvidia',
        model: 'RTX 3050 (Laptop)',
        benchmark: 53.7,
        samples: 3568,
        url: 'https://gpu.userbenchmark.com/SpeedTest/1570008/NVIDIA-GeForce-RTX-3050-Laptop-GPU',
      },
    },
    communications: [
      {
        communicationName: 'Bluetooth',
      },
      {
        communicationName: 'LAN 10/100/1000 Mbps',
      },
      {
        communicationName: 'Wi-Fi',
      },
    ],
    multimedia: [],
    drives: [
      {
        driveType: 'brak',
      },
    ],
    connections: [
      {
        connectionName: 'RJ-45',
      },
      {
        connectionName: 'minijack 3,5 mm (audio)',
      },
      {
        connectionName: 'HDMI',
      },
      {
        connectionName: 'USB 2.0 typ A',
      },
      {
        connectionName: 'USB 3.1 typ C',
      },
      {
        connectionName: 'USB 3.1 typ A',
      },
    ],
    controls: [
      {
        controlName: 'klawiatura',
      },
      {
        controlName: 'klawiatura numeryczna',
      },
      {
        controlName: 'klawiatura podświetlana',
      },
      {
        controlName: 'touchpad',
      },
    ],
    images: [
      {
        id: 194975,
        url: 'https://a.allegroimg.com/original/11aa46/2f6261ee4c9082c0543364ad542b',
      },
      {
        id: 194976,
        url: 'https://a.allegroimg.com/original/11621f/f0d9f83843afbc4e3dc6bcd3c92e',
      },
      {
        id: 194977,
        url: 'https://a.allegroimg.com/original/113b16/1725082e4e6fbc069fdd563a1f70',
      },
      {
        id: 194978,
        url: 'https://a.allegroimg.com/original/115755/d82ca6914291830655da0e4bb662',
      },
      {
        id: 194979,
        url: 'https://a.allegroimg.com/original/11c743/c96b57ec47acbaeb9c5e6d64834f',
      },
      {
        id: 194980,
        url: 'https://a.allegroimg.com/original/11ae5c/1e9a12a94578bb6fa0a315951169',
      },
      {
        id: 194981,
        url: 'https://a.allegroimg.com/original/116bf6/49d7426b4bb08fbc7f146d03b764',
      },
      {
        id: 194982,
        url: 'https://a.allegroimg.com/original/1156c3/d05926ac4fb3889cc0e349e714d3',
      },
      {
        id: 194983,
        url: 'https://a.allegroimg.com/original/11d920/30b1c1124849bc45af479e0d1aad',
      },
    ],
  },
  {
    id: '0048cbc8-a499-40e5-b4ee-175e159bd94b',
    name: 'Laptop Dell Precision 7730 17,3 " Intel Core i7 32 GB / 512 GB czarny',
    model: 'Precision 7730',
    type: 'wzmocniony',
    producentCode: '7730-/6',
    batterySizeWH: null,
    batterySizeMAH: null,
    batteryTime: null,
    color: 'czarny',
    width: 41.5,
    length: 3,
    depth: 27.4,
    weight: 3.15,
    ramAmount: 32,
    ramFrequency: 2666,
    ramNumberOfSlots: null,
    ramNumberOfFreeSlots: null,
    ramType: 'DDR4',
    ramMaxAmount: 64,
    driveStorage: 512,
    driveType: 'SSD',
    hddSpeed: null,
    price: 7799.81,
    priceSource: 'allegro',
    processor: {
      id: 24023,
      model: 'Intel Core i7-8850H',
      series: 'Intel Core i7',
      cores: 6,
      frequency: 2.6,
      benchmark: {
        id: 1433,
        type: 'CPU',
        brand: 'Intel',
        model: 'Core i7-8850H',
        benchmark: 70.7,
        samples: 20669,
        url: 'https://cpu.userbenchmark.com/SpeedTest/485626/IntelR-CoreTM-i7-8850H-CPU---260GHz',
      },
    },
    screen: {
      id: 29050,
      diagonalScreenInches: 17.3,
      resolution: '1920 x 1080',
      screenFinish: 'matowa',
      screenType: null,
      refreshRate: null,
      touchScreen: false,
    },
    graphics: {
      id: 24023,
      graphicsCardModel: 'NVIDIA Quadro P4200',
      graphicsCardType: 'Grafika dedykowana',
      graphicsCardVRam: '8 GB',
      benchmark: {
        id: 1543,
        type: 'GPU',
        brand: 'Nvidia',
        model: 'Quadro P5000-M (Mobile)',
        benchmark: 65,
        samples: 646,
        url: 'https://gpu.userbenchmark.com/SpeedTest/249248/NVIDIA-Quadro-P5000',
      },
    },
    communications: [
      {
        communicationName: 'Bluetooth',
      },
      {
        communicationName: 'LAN 10/100/1000 Mbps',
      },
      {
        communicationName: 'Wi-Fi',
      },
    ],
    multimedia: [],
    drives: [
      {
        driveType: 'brak',
      },
    ],
    connections: [
      {
        connectionName: 'mini DisplayPort',
      },
      {
        connectionName: 'HDMI',
      },
      {
        connectionName: 'USB 3.1 typ C',
      },
      {
        connectionName: 'USB 3.0',
      },
      {
        connectionName: 'Thunderbolt',
      },
      {
        connectionName: 'RJ-45',
      },
    ],
    controls: [
      {
        controlName: 'klawiatura numeryczna',
      },
      {
        controlName: 'klawiatura',
      },
      {
        controlName: 'touchpad',
      },
      {
        controlName: 'klawiatura podświetlana',
      },
    ],
    images: [
      {
        id: 208733,
        url: 'https://a.allegroimg.com/original/117340/758d52774921bdce199810774f98',
      },
      {
        id: 208734,
        url: 'https://a.allegroimg.com/original/11e678/58e3311643de9c1df5159a5e3753',
      },
      {
        id: 208735,
        url: 'https://a.allegroimg.com/original/1190ef/57910b6b4b908a7e157b3e698dcf',
      },
      {
        id: 208736,
        url: 'https://a.allegroimg.com/original/110f19/d8e93b9b4731a10d5a0f2ac6c0f3',
      },
      {
        id: 208737,
        url: 'https://a.allegroimg.com/original/11ccab/d8bd56454c0e9da071c9c0a24b6d',
      },
    ],
  },
  {
    id: '005a22d0-b1e6-4498-b200-6d88bbd35f30',
    name: 'Laptop Dell 5511-3377 15,6 " Intel Core i7 16 GB / 512 GB szary',
    model: '5511-3377',
    type: 'standardowy',
    producentCode: '5511-3377',
    batterySizeWH: null,
    batterySizeMAH: null,
    batteryTime: null,
    color: 'szary',
    width: 35.6,
    length: 2.49,
    depth: 27.2,
    weight: 2.65,
    ramAmount: 16,
    ramFrequency: 3200,
    ramNumberOfSlots: null,
    ramNumberOfFreeSlots: null,
    ramType: 'DDR4',
    ramMaxAmount: 32,
    driveStorage: 512,
    driveType: 'SSD',
    hddSpeed: null,
    price: 6299,
    priceSource: 'allegro',
    processor: {
      id: 24024,
      model: 'Intel Core i7-11800H',
      series: 'Intel Core i7',
      cores: 8,
      frequency: 2.3,
      benchmark: {
        id: 1375,
        type: 'CPU',
        brand: 'Intel',
        model: 'Core i7-11800H',
        benchmark: 87.9,
        samples: 44858,
        url: 'https://cpu.userbenchmark.com/SpeedTest/1542191/11th-Gen-IntelR-CoreTM-i7-11800H---230GHz',
      },
    },
    screen: {
      id: 29051,
      diagonalScreenInches: 15.6,
      resolution: '1920 x 1080',
      screenFinish: 'antyrefleksyjna',
      screenType: null,
      refreshRate: 165,
      touchScreen: false,
    },
    graphics: {
      id: 24024,
      graphicsCardModel: 'NVIDIA GeForce RTX 3060',
      graphicsCardType: 'Grafika dedykowana',
      graphicsCardVRam: '6 GB',
      benchmark: {
        id: 1534,
        type: 'GPU',
        brand: 'Nvidia',
        model: 'RTX 3060 (Laptop)',
        benchmark: 88.6,
        samples: 62203,
        url: 'https://gpu.userbenchmark.com/SpeedTest/1452971/NVIDIA-GeForce-RTX-3060-Laptop-GPU',
      },
    },
    communications: [
      {
        communicationName: 'Bluetooth',
      },
      {
        communicationName: 'LAN 10/100/1000 Mbps',
      },
      {
        communicationName: 'Wi-Fi',
      },
    ],
    multimedia: [],
    drives: [],
    connections: [
      {
        connectionName: 'Thunderbolt',
      },
      {
        connectionName: 'HDMI',
      },
    ],
    controls: [
      {
        controlName: 'klawiatura numeryczna',
      },
      {
        controlName: 'klawiatura',
      },
      {
        controlName: 'touchpad',
      },
      {
        controlName: 'klawiatura podświetlana',
      },
    ],
    images: [
      {
        id: 208738,
        url: 'https://a.allegroimg.com/original/1157b0/364faeba446a98cb6a7d66a44b2a',
      },
      {
        id: 208739,
        url: 'https://a.allegroimg.com/original/116e52/497e4ed54574abd19baa94c1f2d2',
      },
      {
        id: 208740,
        url: 'https://a.allegroimg.com/original/117797/66a967224210b21c6731d736164f',
      },
      {
        id: 208741,
        url: 'https://a.allegroimg.com/original/11f542/ff54265947e59a892663f2d40f21',
      },
      {
        id: 208742,
        url: 'https://a.allegroimg.com/original/112766/089ea0b04994b291e83ba8e00142',
      },
      {
        id: 208743,
        url: 'https://a.allegroimg.com/original/11d5ef/5db962e54a528b2a99fe4941ad06',
      },
    ],
  },
  {
    id: '007b629a-b842-470e-bfef-004fbfd9b949',
    name: 'Laptop Dell Latitude 7390 13,3 " Intel Core i7 16 GB / 256 GB czarny',
    model: 'Latitude 7390',
    type: '2w1',
    producentCode: '7390-dl',
    batterySizeWH: null,
    batterySizeMAH: null,
    batteryTime: null,
    color: 'czarny',
    width: 30.51,
    length: 1.81,
    depth: 21,
    weight: 1.42,
    ramAmount: 16,
    ramFrequency: null,
    ramNumberOfSlots: null,
    ramNumberOfFreeSlots: null,
    ramType: 'DDR4',
    ramMaxAmount: 16,
    driveStorage: 256,
    driveType: 'SSD',
    hddSpeed: null,
    price: 4846.8,
    priceSource: 'allegro',
    processor: {
      id: 24025,
      model: 'Intel Core i7-8650U',
      series: 'Intel Core i7',
      cores: 4,
      frequency: 1.9,
      benchmark: {
        id: 1364,
        type: 'CPU',
        brand: 'Intel',
        model: 'Core i7-8650U',
        benchmark: 52.3,
        samples: 42414,
        url: 'https://cpu.userbenchmark.com/SpeedTest/353957/IntelR-CoreTM-i7-8650U-CPU---190GHz',
      },
    },
    screen: {
      id: 29052,
      diagonalScreenInches: 13.3,
      resolution: '1920 x 1080',
      screenFinish: 'błyszcząca antyrefleksyjna',
      screenType: 'IPS',
      refreshRate: null,
      touchScreen: false,
    },
    graphics: {
      id: 24025,
      graphicsCardModel: 'Intel UHD Graphics 620',
      graphicsCardType: 'Grafika zintegrowana',
      graphicsCardVRam: 'współdzielona',
      benchmark: {
        id: 1535,
        type: 'GPU',
        brand: 'Intel',
        model: 'UHD Graphics 620 (Mobile Kaby Lake R)',
        benchmark: 4.83,
        samples: 393994,
        url: 'https://gpu.userbenchmark.com/SpeedTest/320744/IntelR-UHD-Graphics-620',
      },
    },
    communications: [
      {
        communicationName: 'Bluetooth',
      },
      {
        communicationName: 'Wi-Fi',
      },
      {
        communicationName: 'Intel Wireless Display (WiDi)',
      },
    ],
    multimedia: [],
    drives: [
      {
        driveType: 'brak',
      },
    ],
    connections: [
      {
        connectionName: 'USB 3.1 typ C',
      },
      {
        connectionName: 'USB 3.0',
      },
      {
        connectionName: 'minijack 3,5 mm (audio)',
      },
      {
        connectionName: 'inne',
      },
      {
        connectionName: 'HDMI',
      },
    ],
    controls: [
      {
        controlName: 'klawiatura podświetlana',
      },
      {
        controlName: 'klawiatura',
      },
      {
        controlName: 'touchpad',
      },
    ],
    images: [
      {
        id: 208744,
        url: 'https://a.allegroimg.com/original/110ff8/ca071c6b420a8686dbffb51866c5',
      },
    ],
  },
  {
    id: '00d5ad9a-ef6d-4dc6-ab73-991e0f90db4f',
    name: 'Laptop Dell Latitude E5440 14 " Intel Core i5 16 GB / 1000 GB czarny',
    model: 'Latitude E5440',
    type: 'wzmocniony',
    producentCode: 'E5440',
    batterySizeWH: null,
    batterySizeMAH: null,
    batteryTime: null,
    color: 'czarny',
    width: 33.8,
    length: 2.86,
    depth: 23.5,
    weight: 2.3,
    ramAmount: 16,
    ramFrequency: 1600,
    ramNumberOfSlots: null,
    ramNumberOfFreeSlots: null,
    ramType: 'DDR3',
    ramMaxAmount: 16,
    driveStorage: 1000,
    driveType: 'SSD',
    hddSpeed: null,
    price: 2055.32,
    priceSource: 'allegro',
    processor: {
      id: 24026,
      model: 'Intel Core i5-4300U',
      series: 'Intel Core i5',
      cores: 2,
      frequency: 1.9,
      benchmark: {
        id: 1374,
        type: 'CPU',
        brand: 'Intel',
        model: 'Core i5-4300U',
        benchmark: 43.7,
        samples: 36631,
        url: 'https://cpu.userbenchmark.com/SpeedTest/4996/IntelR-CoreTM-i5-4300U-CPU---190GHz',
      },
    },
    screen: {
      id: 29053,
      diagonalScreenInches: 14,
      resolution: '1366 x 768',
      screenFinish: 'matowa',
      screenType: null,
      refreshRate: null,
      touchScreen: false,
    },
    graphics: {
      id: 24026,
      graphicsCardModel: 'Intel HD Graphics 4400',
      graphicsCardType: 'Grafika zintegrowana',
      graphicsCardVRam: 'współdzielona',
      benchmark: {
        id: 1553,
        type: 'GPU',
        brand: 'Intel',
        model: 'HD 4400 (Mobile 1.0/1.1 GHz)',
        benchmark: 2.22,
        samples: 274655,
        url: 'https://gpu.userbenchmark.com/SpeedTest/7668/IntelR-HD-Graphics-Family',
      },
    },
    communications: [
      {
        communicationName: 'Bluetooth',
      },
      {
        communicationName: 'LAN 10/100/1000 Mbps',
      },
      {
        communicationName: 'Wi-Fi',
      },
    ],
    multimedia: [],
    drives: [],
    connections: [
      {
        connectionName: 'USB 2.0',
      },
      {
        connectionName: 'minijack 3,5 mm (audio)',
      },
      {
        connectionName: 'HDMI',
      },
      {
        connectionName: 'ExpressCard',
      },
      {
        connectionName: 'D-Sub (VGA)',
      },
      {
        connectionName: 'złącze dokowania',
      },
      {
        connectionName: 'USB 3.0',
      },
    ],
    controls: [
      {
        controlName: 'klawiatura',
      },
      {
        controlName: 'touchpad',
      },
    ],
    images: [
      {
        id: 208745,
        url: 'https://a.allegroimg.com/original/11c3b2/fbc238bc4e27b756045163159f7c',
      },
      {
        id: 208746,
        url: 'https://a.allegroimg.com/original/11d21e/032c58944452a2352476eb065832',
      },
      {
        id: 208747,
        url: 'https://a.allegroimg.com/original/114166/016cc8864231bcf903a0ef0f3013',
      },
      {
        id: 208748,
        url: 'https://a.allegroimg.com/original/110799/d9d1faaf476b98cde2351361c716',
      },
      {
        id: 208749,
        url: 'https://a.allegroimg.com/original/118a8f/3a201df3492a85eeea088a963e48',
      },
      {
        id: 208750,
        url: 'https://a.allegroimg.com/original/114ab1/eb0a458f4710847e8efa73f6a1a8',
      },
    ],
  },
  {
    id: '0067a3b2-5b72-4a3f-abf3-aabfc6b0033a',
    name: 'Laptop Dell E5470 BLACK edt. SSD| Bezawaryjny | Szybki | Lekki 14 " Intel Core i5 32 GB / 2048 GB czarny',
    model: 'E5470 BLACK edt. SSD| Bezawaryjny | Szybki | Lekki',
    type: 'ultrabook',
    producentCode: 'niezawodny laptop do biura i domu OFFICE',
    batterySizeWH: 47,
    batterySizeMAH: 4090,
    batteryTime: 8,
    color: 'czarny',
    width: 31,
    length: null,
    depth: 21.5,
    weight: 1.7,
    ramAmount: 32,
    ramFrequency: null,
    ramNumberOfSlots: null,
    ramNumberOfFreeSlots: null,
    ramType: null,
    ramMaxAmount: 32,
    driveStorage: 2048,
    driveType: 'SSD',
    hddSpeed: null,
    price: 3199.35,
    priceSource: 'allegro',
    processor: {
      id: 25051,
      model: 'Intel Core i5-6300U',
      series: 'Intel Core i5',
      cores: 2,
      frequency: 2.4,
      benchmark: {
        id: 1356,
        type: 'CPU',
        brand: 'Intel',
        model: 'Core i5-6300U',
        benchmark: 40.4,
        samples: 59619,
        url: 'https://cpu.userbenchmark.com/SpeedTest/27864/IntelR-CoreTM-i5-6300U-CPU---240GHz',
      },
    },
    screen: {
      id: 30078,
      diagonalScreenInches: 14,
      resolution: '1366 x 768',
      screenFinish: 'matowa',
      screenType: null,
      refreshRate: null,
      touchScreen: false,
    },
    graphics: {
      id: 25051,
      graphicsCardModel: 'Intel HD Graphics 520',
      graphicsCardType: 'Grafika zintegrowana',
      graphicsCardVRam: 'współdzielona',
      benchmark: {
        id: 1531,
        type: 'GPU',
        brand: 'Intel',
        model: 'HD 520 (Mobile Skylake)',
        benchmark: 4.26,
        samples: 319225,
        url: 'https://gpu.userbenchmark.com/SpeedTest/36797/IntelR-HD-Graphics-520',
      },
    },
    communications: [
      {
        communicationName: 'Bluetooth',
      },
      {
        communicationName: 'LAN 10/100/1000 Mbps',
      },
      {
        communicationName: 'Wi-Fi',
      },
    ],
    multimedia: [],
    drives: [
      {
        driveType: 'brak',
      },
    ],
    connections: [
      {
        connectionName: 'minijack 3,5 mm (audio)',
      },
      {
        connectionName: 'HDMI',
      },
      {
        connectionName: 'D-Sub (VGA)',
      },
      {
        connectionName: 'USB 3.0',
      },
      {
        connectionName: 'RJ-45',
      },
    ],
    controls: [
      {
        controlName: 'klawiatura',
      },
      {
        controlName: 'klawiatura podświetlana',
      },
      {
        controlName: 'punkt dotykowy (TrackPoint)',
      },
      {
        controlName: 'touchpad',
      },
    ],
    images: [
      {
        id: 218883,
        url: 'https://a.allegroimg.com/original/11643b/ddd715a041649d5f9fc25d318cf3',
      },
      {
        id: 218884,
        url: 'https://a.allegroimg.com/original/11812d/758aa4cf4e039542782d4cebabfe',
      },
      {
        id: 218885,
        url: 'https://a.allegroimg.com/original/11abcf/302223694a33a7d87a665a4bfef5',
      },
      {
        id: 218886,
        url: 'https://a.allegroimg.com/original/1139ac/40ed74154a09bdcb274e89394965',
      },
      {
        id: 218887,
        url: 'https://a.allegroimg.com/original/11c866/bd153ad6458fb7a096b541f7b058',
      },
      {
        id: 218888,
        url: 'https://a.allegroimg.com/original/115590/b99c5a8442a899a54174e3e34c82',
      },
      {
        id: 218889,
        url: 'https://a.allegroimg.com/original/1104ad/c07ac6504532920c67586f8336df',
      },
      {
        id: 218890,
        url: 'https://a.allegroimg.com/original/11b0fe/e1e0242940a79efc1cb79ca18cff',
      },
      {
        id: 218891,
        url: 'https://a.allegroimg.com/original/1136d3/34420d98407a9e162c40eb137b09',
      },
      {
        id: 218892,
        url: 'https://a.allegroimg.com/original/119412/ccc3534142d7ac69c3acfed755a6',
      },
      {
        id: 218893,
        url: 'https://a.allegroimg.com/original/11ff89/0f054f184c038cd18fc8675ce8fd',
      },
      {
        id: 218894,
        url: 'https://a.allegroimg.com/original/113303/c2617da3412da66287d88e5d676a',
      },
      {
        id: 218895,
        url: 'https://a.allegroimg.com/original/117fd9/f1a4901d474fb962f131dba93add',
      },
      {
        id: 218896,
        url: 'https://a.allegroimg.com/original/115db3/0ef2b109457ebf1ea3097d909a36',
      },
      {
        id: 218897,
        url: 'https://a.allegroimg.com/original/11d032/a63b923d4c35b486728c53ef712a',
      },
    ],
  },
];

describe('Sample Laptops Test', () => {
  let moduleRepository: Repository<ModelEntity>;
  beforeAll(async () => {
    const module = await CreateLaptopsTestingModule([], []);
    moduleRepository = module.get('ModelEntityRepository');
  });

  it('Should have 20 elements in sample list', async () => {
    expect(await moduleRepository.count()).toBe(20);
    // expect(appController.getHello()).toBe('Hello World!');
  });
});
