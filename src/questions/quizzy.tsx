type Question = {
    quest: string;
    options: string[];
    rightAnswer: string[];
};

function Quizzy(cont: number = 0) {

    const questions: Question[] = [
        {
            quest: 'Em qual país foi inventado o chuveiro elétrico?',
            options: ['a - França', 'b - Brasil', 'c - Alemanha'],
            rightAnswer: ['b', 'k']
        },
        {
            quest: 'Qual o nome do cachorro do Mickey?',
            options: ['a - Pluto', 'b - Goofy', 'c - Scooby Doo'],
            rightAnswer: ['a', 'j']
        },
        {
            quest: 'Qual o nome do criador do Facebook?',
            options: ['a - Steve Jobs', 'b - Bill Gates', 'c - Mark Zuckerberg'],
            rightAnswer: ['c', 'l']
        },
        {
            quest: 'Qual o nome do cientista que descobriu a gravidade?',
            options: ['a - Albert Einstein', 'b - Isaac Newton', 'c - Galileu Galilei'],
            rightAnswer: ['b', 'k']
        }
    ];

    return(questions[cont]);
}

export default Quizzy;