import { pool } from '../../db';
import { Request, RequestHandler, Response, ErrorRequestHandler } from 'express';
import { getUserById,getUsers,addUser,deleteUser,checkNicknameExists } from './queries';

export const CgetUsers = (req: Request, res: Response) => {
    pool.query(getUsers, (error: Error, results: any) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
    console.log('getting users')
};

export const CgetUserById = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    pool.query(getUserById, [id], (error: Error, results: any) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
    console.log('getting specific user')
}

export const CaddUser = (req: Request, res: Response) => {
    const { nickname, bio, password, fullname } = req.body;

    pool.query(checkNicknameExists, [nickname], (error: Error, results: any) => {
        if (results.rows.length) {
            res.send("Nickname already taken.");
        }
        pool.query(addUser, [nickname, bio, password, fullname], (error: Error, results: any) => {
            if (error) throw error;
            res.status(201).send("User created successfully.");
            console.log('user created');
        })
    });
};

export const CdeleteUser = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    pool.query(getUserById, [id], (error: Error, results: any) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist, could not delete.");
        }

        pool.query(deleteUser, [id], (error: Error, results: any) => {
            if (error) throw error;
            res.status(200).send("User deleted successfully.");
        });
       
    })
};