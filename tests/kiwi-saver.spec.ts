import { test } from '@playwright/test';
import { KiwiSaverPage } from '../pageObjects/KiwiSaverPage';
import {testData} from '../testData/kiwi-saver-test-data'

test('Get Current Projection',async({page})=>{
    const kiwiSaverPage = new KiwiSaverPage(page);

    await page.goto(testData.appName);
    await kiwiSaverPage.clickOnCalculatorButton();
    await kiwiSaverPage.enterAge(testData.age);
    await kiwiSaverPage.clickNextQuestion();
    await kiwiSaverPage.selectUsageOption(testData.usageOption);
    await kiwiSaverPage.selectYearUntilPurchase(testData.yearUntilPurchase);
    await kiwiSaverPage.selectEmploymentStatus(testData.employmentStatus);
    await kiwiSaverPage.enterIncome(testData.incomeFrequency,testData.income)
    await kiwiSaverPage.enterKiwiSaverBalance(testData.kiwiSaverBalance);
    await kiwiSaverPage.selectContributionOption(testData.contributionRate);
    await kiwiSaverPage.selectFundType(testData.fundType);
    await kiwiSaverPage.validateAndPrintCurrentProjection();


})