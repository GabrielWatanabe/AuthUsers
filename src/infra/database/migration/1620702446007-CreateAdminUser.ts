import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { User } from "../../../domain/user/entity/User";

export class CreateAdminUser1620702446007 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let user = new User();
        user.username = "admin";
        user.password = "admin";
        user.mail = "admin@admin.com";
        user.hashPassword();
        user.role = "ADMIN";
        const userRepository = getRepository(User);
        await userRepository.save(user);
      }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
