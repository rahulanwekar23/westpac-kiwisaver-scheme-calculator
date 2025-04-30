import { Page,expect} from '@playwright/test'

export class KiwiSaverPage{
    readonly page:Page;

    readonly openCalculatorButton = 'button:has-text("Open The Calculator")';
    readonly ageInput = '#text-QUESTION_AGE';
    readonly nextQuestionButton = 'button:has-text("Next Question")';
    readonly yearUntilPurchase = '[aria-labelledby="dropdown-QUESTION_WHEN_TO_BUY_HOME"]';
    readonly employmentStatus = '[aria-labelledby="dropdown-QUESTION_EMPLOYMENT_STATUS"]';
    readonly incomeFrequency = '[aria-labelledby="dropdown-QUESTION_INCOME"]';
    readonly income = '#text-QUESTION_INCOME';
    readonly kiwiSaverBalance = '#text-QUESTION_KIWISAVER_BALANCE';
    readonly contributionRate = '[aria-labelledby="dropdown-QUESTION_CONTRIBUTION_PERCENTAGE"]';
    readonly fundType = '[aria-labelledby="dropdown-QUESTION_CURRENT_FUND"]';
    readonly currentProjection = 'p.MuiTypography-subtitle1';
    readonly projectionTitle = 'h2.MuiTypography-gutterBottom';

    constructor(page: Page){
        this.page = page;
    }

    async clickOnCalculatorButton(){
        await this.page.click(this.openCalculatorButton);
    }

    async enterAge(age:string){
        await this.page.fill(this.ageInput,age);
    }

    async clickNextQuestion(){
        await this.page.click(this.nextQuestionButton);
    }

    async selectUsageOption(option: string){
        await this.page.getByRole('radio',{name: option}).click();
    }

    async selectYearUntilPurchase(year: string){
        await this.page.click(this.yearUntilPurchase);
        await this.page.getByRole('option',{name: year}).click();
    }

    async selectEmploymentStatus(empStatus: string){
        await this.page.click(this.employmentStatus);
        await this.page.getByRole('option',{name: empStatus, exact:true}).click();
    }

    async enterIncome(frequency:string, income:string){
        await this.page.click(this.incomeFrequency);
        await this.page.getByRole('option',{name: frequency}).click();
        await this.page.fill(this.income,income);
        await this.page.locator('form').filter({hasText: 'What’s your income' }).getByRole('button').click();
    }

    async enterKiwiSaverBalance(balance:string){
        await this.page.fill(this.kiwiSaverBalance,balance);
        await this.page.locator('form').filter({hasText: 'what’s your current KiwiSaver' }).getByRole('button').click();
    }

    async selectContributionOption(option: string){
        await this.page.click(this.contributionRate);
        await this.page.getByRole('option',{name: option}).click();
    }

    async selectFundType(fundType: string){
        await this.page.click(this.fundType);
        await this.page.getByRole('option',{name: fundType}).click();
    }

    async validateAndPrintCurrentProjection(){
        await expect(this.page.locator(this.projectionTitle)).toHaveText('Your current projection.');
        console.log('Below is your current Projection:\n'+await this.page.textContent(this.currentProjection));
    }

     
}