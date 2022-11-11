import { Request, Response } from 'express';
import { Category } from '../models/Category';
import {User} from '../models/User'

export const FindAll = async (req: Request, res: Response)=>{

    let users = await User.findAll({include: Category})
    return users.length > 0
    ?res.status(200).json(users)
    :res.status(204).send()
};

export const FindOne = async (req: Request, res: Response) => {
    const {id} = req.params
    const user = await User.findByPk(id, {include: Category});
    return user 
    ?res.status(200).json(user) 
    :res.status(204).send()



}
export const Create = async (req: Request, res: Response) => {
    const {name, email, password } = req.body;
    const user = await User.create({
        name,
        email,
        password,
    })
    return res.status(201).json(user); // 201 = criado


}

export const Update = async (req: Request, res: Response) => {
    const {id} = req.params
    const {name, idade} = req.body
    let user = await User.findByPk(id);

    if(req.body) {
        if(user) {
            await User.update(req.body, 
                {where:
                    {id: id}
                }
            )
            return res.status(200).json({result: 'Usuário editado com sucesso.'})
        } 
        return res.status(404).json({error: 'Usuário não encontrado.'})
    }
    return res.status(204).json({error: 'Dados não enviados.'})
    
}


export const Destroy = async (req: Request, res: Response) => {
    const {id} = req.params
    let user = await User.findByPk(id);
    if(user) {
        await User.destroy({where: {id: id}})
        return res.status(200).json({result: 'Usuário deletado com sucesso.'})
    }
    return res.status(404).json({error: 'Usuário não encontrado.'})
}
