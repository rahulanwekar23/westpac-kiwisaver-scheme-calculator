enum usageOption{
    FirstHome = 'First Home',
    Retirement = 'Retirement'
}

enum yearUntilPurchase{
    LessThen1Year = 'Less then 1 year',
    In2Years = 'in 2 years',
    In3Years = 'in 3 years',
    In4Years = 'in 4 years',
    In5Years = 'in 5 years',
}

enum employmentStatus{
    Employed = 'Employed',
    SelfEmployed = 'Self Employes',
    NotEmployes = 'Not Employed'
}

enum incomeFrequency{
    PerWeek = 'per week',
    PerFortnight = 'per fortnight',
    PerMonth = 'per month',
    PerYear = 'per year'
}

enum contributionRate{
    NotSure = 'Not sure',
    ThreePercent = '3%',
    FourPercent = '4%',
    SixPercent = '6%',
    EightPercent = '8%',
    TenPercent = '10%',
}

enum fundType{
    NotSure = "I'm not sure which fund",
    Mix = "It's a mix fund",
    Cash = 'Cash',
    Conservative = 'Conservative',
    Moderate = 'Moderate',
    Default = 'Balanced / Default',
    Growth = 'Growth',
    HighGrowth = 'High Growth'
}

export const testData = {
    appName: 'https://www.westpac.co.nz/kiwisaver-investments/kiwisaver/kiwisaver-calculators/kiwisaver-calculator/',
    age: '40',
    usageOption: usageOption.FirstHome,
    yearUntilPurchase: yearUntilPurchase.In4Years,
    employmentStatus: employmentStatus.Employed,
    incomeFrequency: incomeFrequency.PerYear,
    income: '100000',
    kiwiSaverBalance: '1000',
    contributionRate: contributionRate.SixPercent,
    fundType:fundType.Cash
}