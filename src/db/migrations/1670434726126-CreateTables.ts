import { MigrationInterface, QueryRunner } from "typeorm";
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

// config();
//
// const configService = new ConfigService();
export class CreateTables1670434726126 implements MigrationInterface {
    name = 'CreateTables1670434726126';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "connection_entity" ("connectionName" character varying NOT NULL, CONSTRAINT "PK_bc959a2aaca5c92b600c15a81b9" PRIMARY KEY ("connectionName"))`);
        await queryRunner.query(`CREATE TABLE "control_entity" ("controlName" character varying NOT NULL, CONSTRAINT "PK_420a40f9e6e6a34c806d04b530b" PRIMARY KEY ("controlName"))`);
        await queryRunner.query(`CREATE TABLE "benchmark_entity" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "brand" character varying NOT NULL, "model" character varying NOT NULL, "benchmark" double precision NOT NULL, "samples" integer NOT NULL, "url" character varying NOT NULL, CONSTRAINT "PK_1e4915f0446c25e0db90a03bf80" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "communication_entity" ("communicationName" character varying NOT NULL, CONSTRAINT "PK_e8d7dd6ecee705316abf631a943" PRIMARY KEY ("communicationName"))`);
        await queryRunner.query(`CREATE TABLE "drive_type_entity" ("driveType" character varying NOT NULL, CONSTRAINT "PK_1e2d2f6fc45712750c981cc8565" PRIMARY KEY ("driveType"))`);
        await queryRunner.query(`CREATE TABLE "graphics_entity" ("id" SERIAL NOT NULL, "graphicsCardModel" character varying NOT NULL, "graphicsCardType" character varying, "graphicsCardVRam" character varying, "benchmarkId" integer, CONSTRAINT "PK_da106211ac27d67cd0fa20e54c0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "model_img_entity" ("id" SERIAL NOT NULL, "url" character varying NOT NULL, CONSTRAINT "PK_ee3286c339401540d3eb46381f2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "processor_entity" ("id" SERIAL NOT NULL, "model" character varying NOT NULL, "series" character varying, "cores" integer, "frequency" double precision, "benchmarkId" integer, CONSTRAINT "PK_7abaa2ea709f9001af10ba82c6d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "screen_entity" ("id" SERIAL NOT NULL, "diagonalScreenInches" double precision NOT NULL, "resolution" character varying, "screenFinish" character varying, "screenType" character varying, "refreshRate" integer, "touchScreen" boolean, CONSTRAINT "PK_3005397935f11f13ce51128992a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "multimedia_entity" ("multimediaName" character varying NOT NULL, CONSTRAINT "PK_edf492d2f80ef4c7bd2c26b1c04" PRIMARY KEY ("multimediaName"))`);
        await queryRunner.query(`CREATE TABLE "model_entity" ("id" character varying NOT NULL, "name" character varying NOT NULL, "model" character varying NOT NULL, "type" character varying, "producentCode" character varying, "batterySizeWH" double precision, "batterySizeMAH" double precision, "batteryTime" double precision, "color" character varying, "width" double precision, "length" double precision, "depth" double precision, "weight" double precision, "ramAmount" double precision NOT NULL, "ramFrequency" integer, "ramNumberOfSlots" integer, "ramNumberOfFreeSlots" integer, "ramType" character varying, "ramMaxAmount" integer, "driveStorage" integer NOT NULL, "driveType" character varying, "hddSpeed" integer, "price" double precision NOT NULL, "priceSource" character varying NOT NULL DEFAULT 'unknown', "processorId" integer, "screenId" integer, "graphicsId" integer, CONSTRAINT "PK_042b93cee74ff493db04129d4f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL, "name" character varying NOT NULL, "surname" character varying NOT NULL, CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
        await queryRunner.query(`INSERT INTO user_entity (username, email, password, role, name, surname) VALUES('${process.env.ADMIN_USERNAM}', '${process.env.ADMIN_MAIL}', '${process.env.ADMIN_PASSWORD}', '${process.env.ADMIN_ROLE}', '${process.env.ADMIN_NAME}', '${process.env.ADMIN_SURNAME}')`);
        await queryRunner.query(`CREATE TABLE "stat_tracker_entity" ("id" SERIAL NOT NULL, "timestamp" TIMESTAMP NOT NULL, "eventType" character varying NOT NULL DEFAULT 'unknown', "laptopId" character varying, "formJson" text, "payload" text, CONSTRAINT "PK_02edee5762980d2e6d7dae160bc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "model_entity_connections_connection_entity" ("modelEntityId" character varying NOT NULL, "connectionEntityConnectionName" character varying NOT NULL, CONSTRAINT "PK_193bfcfca1138b95ffd8d8b883e" PRIMARY KEY ("modelEntityId", "connectionEntityConnectionName"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ed3083ac7d4b87b102a3ac87fb" ON "model_entity_connections_connection_entity" ("modelEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_29b3c627a061993963e190e3cd" ON "model_entity_connections_connection_entity" ("connectionEntityConnectionName") `);
        await queryRunner.query(`CREATE TABLE "model_entity_multimedia_multimedia_entity" ("modelEntityId" character varying NOT NULL, "multimediaEntityMultimediaName" character varying NOT NULL, CONSTRAINT "PK_8b9632867e7700a43fe6c0fedf1" PRIMARY KEY ("modelEntityId", "multimediaEntityMultimediaName"))`);
        await queryRunner.query(`CREATE INDEX "IDX_cffaf3456f7f064fd358be5740" ON "model_entity_multimedia_multimedia_entity" ("modelEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_7aa7d79c738546d671f0ced16f" ON "model_entity_multimedia_multimedia_entity" ("multimediaEntityMultimediaName") `);
        await queryRunner.query(`CREATE TABLE "model_entity_communications_communication_entity" ("modelEntityId" character varying NOT NULL, "communicationEntityCommunicationName" character varying NOT NULL, CONSTRAINT "PK_b50a131ac98a82a0ae5956259a7" PRIMARY KEY ("modelEntityId", "communicationEntityCommunicationName"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a34386220ef3af38ebd8ecbd24" ON "model_entity_communications_communication_entity" ("modelEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c6758caa6033f22edc725ec595" ON "model_entity_communications_communication_entity" ("communicationEntityCommunicationName") `);
        await queryRunner.query(`CREATE TABLE "model_entity_controls_control_entity" ("modelEntityId" character varying NOT NULL, "controlEntityControlName" character varying NOT NULL, CONSTRAINT "PK_1f2c069221f08d1283774cbd119" PRIMARY KEY ("modelEntityId", "controlEntityControlName"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2d0091b0b9d1de48a5d84b4bf4" ON "model_entity_controls_control_entity" ("modelEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6a67101e3af7d43b6d912419b0" ON "model_entity_controls_control_entity" ("controlEntityControlName") `);
        await queryRunner.query(`CREATE TABLE "model_entity_drives_drive_type_entity" ("modelEntityId" character varying NOT NULL, "driveTypeEntityDriveType" character varying NOT NULL, CONSTRAINT "PK_fa11408d89df9b7ede5430bb212" PRIMARY KEY ("modelEntityId", "driveTypeEntityDriveType"))`);
        await queryRunner.query(`CREATE INDEX "IDX_31d57e3729776c166eb743427b" ON "model_entity_drives_drive_type_entity" ("modelEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_350612fcd3fad31cdf185a4d3a" ON "model_entity_drives_drive_type_entity" ("driveTypeEntityDriveType") `);
        await queryRunner.query(`CREATE TABLE "model_entity_images_model_img_entity" ("modelEntityId" character varying NOT NULL, "modelImgEntityId" integer NOT NULL, CONSTRAINT "PK_6ef975065b6d3a7044b6c385f94" PRIMARY KEY ("modelEntityId", "modelImgEntityId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_17a2165477855bc8afbd3acc88" ON "model_entity_images_model_img_entity" ("modelEntityId") `);
        await queryRunner.query(`CREATE INDEX "IDX_430cc73dee2700ae7e1b367fe9" ON "model_entity_images_model_img_entity" ("modelImgEntityId") `);
        await queryRunner.query(`ALTER TABLE "graphics_entity" ADD CONSTRAINT "FK_4249fca9541e4b332af35df96b7" FOREIGN KEY ("benchmarkId") REFERENCES "benchmark_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "processor_entity" ADD CONSTRAINT "FK_8505ce0e25c083ac8ff9cc594cc" FOREIGN KEY ("benchmarkId") REFERENCES "benchmark_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "model_entity" ADD CONSTRAINT "FK_fa349334f04e6ea61596e44ec44" FOREIGN KEY ("processorId") REFERENCES "processor_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "model_entity" ADD CONSTRAINT "FK_d28d7dacf6c7f7cff022ef14eb9" FOREIGN KEY ("screenId") REFERENCES "screen_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "model_entity" ADD CONSTRAINT "FK_d5fb6a56cd18dcc02a1773b3f59" FOREIGN KEY ("graphicsId") REFERENCES "graphics_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "model_entity_connections_connection_entity" ADD CONSTRAINT "FK_ed3083ac7d4b87b102a3ac87fb1" FOREIGN KEY ("modelEntityId") REFERENCES "model_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "model_entity_connections_connection_entity" ADD CONSTRAINT "FK_29b3c627a061993963e190e3cd9" FOREIGN KEY ("connectionEntityConnectionName") REFERENCES "connection_entity"("connectionName") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "model_entity_multimedia_multimedia_entity" ADD CONSTRAINT "FK_cffaf3456f7f064fd358be57407" FOREIGN KEY ("modelEntityId") REFERENCES "model_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "model_entity_multimedia_multimedia_entity" ADD CONSTRAINT "FK_7aa7d79c738546d671f0ced16fd" FOREIGN KEY ("multimediaEntityMultimediaName") REFERENCES "multimedia_entity"("multimediaName") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "model_entity_communications_communication_entity" ADD CONSTRAINT "FK_a34386220ef3af38ebd8ecbd242" FOREIGN KEY ("modelEntityId") REFERENCES "model_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "model_entity_communications_communication_entity" ADD CONSTRAINT "FK_c6758caa6033f22edc725ec595f" FOREIGN KEY ("communicationEntityCommunicationName") REFERENCES "communication_entity"("communicationName") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "model_entity_controls_control_entity" ADD CONSTRAINT "FK_2d0091b0b9d1de48a5d84b4bf4d" FOREIGN KEY ("modelEntityId") REFERENCES "model_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "model_entity_controls_control_entity" ADD CONSTRAINT "FK_6a67101e3af7d43b6d912419b0c" FOREIGN KEY ("controlEntityControlName") REFERENCES "control_entity"("controlName") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "model_entity_drives_drive_type_entity" ADD CONSTRAINT "FK_31d57e3729776c166eb743427b4" FOREIGN KEY ("modelEntityId") REFERENCES "model_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "model_entity_drives_drive_type_entity" ADD CONSTRAINT "FK_350612fcd3fad31cdf185a4d3af" FOREIGN KEY ("driveTypeEntityDriveType") REFERENCES "drive_type_entity"("driveType") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "model_entity_images_model_img_entity" ADD CONSTRAINT "FK_17a2165477855bc8afbd3acc88d" FOREIGN KEY ("modelEntityId") REFERENCES "model_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "model_entity_images_model_img_entity" ADD CONSTRAINT "FK_430cc73dee2700ae7e1b367fe9a" FOREIGN KEY ("modelImgEntityId") REFERENCES "model_img_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "model_entity_images_model_img_entity" DROP CONSTRAINT "FK_430cc73dee2700ae7e1b367fe9a"`);
        await queryRunner.query(`ALTER TABLE "model_entity_images_model_img_entity" DROP CONSTRAINT "FK_17a2165477855bc8afbd3acc88d"`);
        await queryRunner.query(`ALTER TABLE "model_entity_drives_drive_type_entity" DROP CONSTRAINT "FK_350612fcd3fad31cdf185a4d3af"`);
        await queryRunner.query(`ALTER TABLE "model_entity_drives_drive_type_entity" DROP CONSTRAINT "FK_31d57e3729776c166eb743427b4"`);
        await queryRunner.query(`ALTER TABLE "model_entity_controls_control_entity" DROP CONSTRAINT "FK_6a67101e3af7d43b6d912419b0c"`);
        await queryRunner.query(`ALTER TABLE "model_entity_controls_control_entity" DROP CONSTRAINT "FK_2d0091b0b9d1de48a5d84b4bf4d"`);
        await queryRunner.query(`ALTER TABLE "model_entity_communications_communication_entity" DROP CONSTRAINT "FK_c6758caa6033f22edc725ec595f"`);
        await queryRunner.query(`ALTER TABLE "model_entity_communications_communication_entity" DROP CONSTRAINT "FK_a34386220ef3af38ebd8ecbd242"`);
        await queryRunner.query(`ALTER TABLE "model_entity_multimedia_multimedia_entity" DROP CONSTRAINT "FK_7aa7d79c738546d671f0ced16fd"`);
        await queryRunner.query(`ALTER TABLE "model_entity_multimedia_multimedia_entity" DROP CONSTRAINT "FK_cffaf3456f7f064fd358be57407"`);
        await queryRunner.query(`ALTER TABLE "model_entity_connections_connection_entity" DROP CONSTRAINT "FK_29b3c627a061993963e190e3cd9"`);
        await queryRunner.query(`ALTER TABLE "model_entity_connections_connection_entity" DROP CONSTRAINT "FK_ed3083ac7d4b87b102a3ac87fb1"`);
        await queryRunner.query(`ALTER TABLE "model_entity" DROP CONSTRAINT "FK_d5fb6a56cd18dcc02a1773b3f59"`);
        await queryRunner.query(`ALTER TABLE "model_entity" DROP CONSTRAINT "FK_d28d7dacf6c7f7cff022ef14eb9"`);
        await queryRunner.query(`ALTER TABLE "model_entity" DROP CONSTRAINT "FK_fa349334f04e6ea61596e44ec44"`);
        await queryRunner.query(`ALTER TABLE "processor_entity" DROP CONSTRAINT "FK_8505ce0e25c083ac8ff9cc594cc"`);
        await queryRunner.query(`ALTER TABLE "graphics_entity" DROP CONSTRAINT "FK_4249fca9541e4b332af35df96b7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_430cc73dee2700ae7e1b367fe9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_17a2165477855bc8afbd3acc88"`);
        await queryRunner.query(`DROP TABLE "model_entity_images_model_img_entity"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_350612fcd3fad31cdf185a4d3a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_31d57e3729776c166eb743427b"`);
        await queryRunner.query(`DROP TABLE "model_entity_drives_drive_type_entity"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6a67101e3af7d43b6d912419b0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2d0091b0b9d1de48a5d84b4bf4"`);
        await queryRunner.query(`DROP TABLE "model_entity_controls_control_entity"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c6758caa6033f22edc725ec595"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a34386220ef3af38ebd8ecbd24"`);
        await queryRunner.query(`DROP TABLE "model_entity_communications_communication_entity"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7aa7d79c738546d671f0ced16f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_cffaf3456f7f064fd358be5740"`);
        await queryRunner.query(`DROP TABLE "model_entity_multimedia_multimedia_entity"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_29b3c627a061993963e190e3cd"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ed3083ac7d4b87b102a3ac87fb"`);
        await queryRunner.query(`DROP TABLE "model_entity_connections_connection_entity"`);
        await queryRunner.query(`DROP TABLE "stat_tracker_entity"`);
        await queryRunner.query(`DROP TABLE "user_entity"`);
        await queryRunner.query(`DROP TABLE "model_entity"`);
        await queryRunner.query(`DROP TABLE "multimedia_entity"`);
        await queryRunner.query(`DROP TABLE "screen_entity"`);
        await queryRunner.query(`DROP TABLE "processor_entity"`);
        await queryRunner.query(`DROP TABLE "model_img_entity"`);
        await queryRunner.query(`DROP TABLE "graphics_entity"`);
        await queryRunner.query(`DROP TABLE "drive_type_entity"`);
        await queryRunner.query(`DROP TABLE "communication_entity"`);
        await queryRunner.query(`DROP TABLE "benchmark_entity"`);
        await queryRunner.query(`DROP TABLE "control_entity"`);
        await queryRunner.query(`DROP TABLE "connection_entity"`);
    }

}
