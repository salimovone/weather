export interface Condition {
    text: string,
    icon: string,
    code: number
}

export interface Hour                     {
    time: string,
    temp_c: 20.9,
    condition: Condition
}

export interface resData {
    location: {
        name: string,
        region: string,
        country: string,
        localtime: string
    },
    current: {
        temp_c: number,
        condition: Condition,
        wind_kph: number,
        humidity: number,
        feelslike_c: number,
    },
    forecast: {
        forecastday: [
            {
                date: string,
                day: {
                    condition: Condition
                },
                astro: {
                    sunrise: string,
                    sunset: string,
                },
                hour: Hour[]
            }
        ]
    }
}