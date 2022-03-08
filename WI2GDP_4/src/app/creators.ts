export interface Creators {
    name: string;
    jokes: string;
    funny: number;
    notFunny: number;

}

export const creators: Creators[] = [
    {
        name: 'ExampleUser',
        jokes: '- Did you hear about the first restaurant to open on the moon?\n- It had great food, but no atmosphere.',
        funny: 16,
        notFunny: 24
    },
    { 
        name: 'JohnDoe',
        jokes: '- When does a joke become a dad joke?\n- When it becomes apparnet.',
        funny: 156,
        notFunny: 128
    },
    { 
        name: 'JaneDoe',
        jokes: '- What is the difference between an oral thermometer and a rectal thermometer\n- The taste.',
        funny: 256,
        notFunny: 128
    }
          
]
