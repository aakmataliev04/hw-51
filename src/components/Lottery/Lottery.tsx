import {useState} from "react";
import './Lottery.css'
import LotteryNumber from "../LotteryNumber/LotteryNumber";

const Lottery = () => {

    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const reGenerateNumbers = () => {
        const newNumbers:number[] = [];

        const getNewNumber = () => {
            return (Math.floor(Math.random() * 31 + 5));
        };

        // eslint-disable-next-line for-direction
        for (let i = 0; i < 5; i++) {
            const newNumber:number = getNewNumber();
            newNumbers.push(newNumber);
        }

        newNumbers.sort((a, b) => {
            return a - b;
        });

        setNumbers(newNumbers);
    };

    return (
        <div className={'container'}>

            <button type={'button'} className={'button-85'} onClick={reGenerateNumbers}>New numbers</button>
            <div className={'numList'}>
                {
                    numbers.map((number: number, index) => {

                        return (
                            <LotteryNumber key={index} value={number} />
                        );
                    })
                }
            </div>
        </div>

    );
};

export default Lottery;