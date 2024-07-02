import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('https://bigshop.md/')

WebUI.click(findTestObject('Object Repository/Login_Test/Page_BIGSHOP - magazin online in Chisinau s_407bda/i_Favorite_navbar-tool-icon ci-user'))

WebUI.navigateToUrl('https://bigshop.md/ro/auth/login')

WebUI.setText(findTestObject('Object Repository/Login_Test/Page_Bigshop.md  Internet magazin online de_8c0fb1/input_Logare_email'), 
    '375447522509@mail.ru')

WebUI.setEncryptedText(findTestObject('Object Repository/Login_Test/Page_Bigshop.md  Internet magazin online de_8c0fb1/input_Logare_password'), 
    'RigbBhfdqODKcAsiUrg+1Q==')

WebUI.click(findTestObject('Object Repository/Login_Test/Page_Bigshop.md  Internet magazin online de_8c0fb1/button_Logheaz-te'))

WebUI.click(findTestObject('Object Repository/Login_Test/Page_BIGSHOP - magazin online in Chisinau s_407bda/a_Electronice'))

WebUI.click(findTestObject('Object Repository/Login_Test/Page_Electronice - Cumpara in Chisinau, Mol_ee6701/i_Favorite_navbar-tool-icon ci-user'))

WebUI.click(findTestObject('Object Repository/Login_Test/Page_Electronice - Cumpara in Chisinau, Mol_ee6701/a_Contul meu'))

WebUI.navigateToUrl('https://bigshop.md/ro/my-profile')

WebUI.click(findTestObject('Object Repository/Login_Test/Page_Bigshop.md  Internet magazin online de_8c0fb1/a_Ieire'))

WebUI.closeBrowser()

