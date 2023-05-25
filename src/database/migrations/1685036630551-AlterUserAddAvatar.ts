import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserAddAvatar1685036630551 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await  queryRunner.addColumn("users", 
        new TableColumn({
              name : "avatar",
              type : "varchar",
              isNullable : true
              //isNullable declara que o avatar pode ser nulo
        }))
     }
 
     public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "avatar")
     }
 
 }
