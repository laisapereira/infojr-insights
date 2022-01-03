import { useCallback, useState } from "react";
import { CardIdea } from "../interfaces";
import { CardService } from '../services/CardService'

export const useCard = () => {
    const [card, setCard] = useState<CardIdea []>([]);

    const getAll = useCallback(async () => {           // callback: recriar  função só depois do parametro
                                                      // usou no componente umavez, não sofrealteração 
        const {status, data} = await CardService.getAll();

        if (status !== 200) throw new Error();


        setCard(data);
    }, [])


    return {
        card,
        getAll
    }
}

