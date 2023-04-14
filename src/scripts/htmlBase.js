// We are going to create the HTML elements 
const body = document.querySelector('body')

const header = document.createElement('header')
const header__title = document.createElement('div')
const headerTitle__h1 = document.createElement('h1')
const headerTitle__h1_blue = document.createElement('h1')
const header__button = document.createElement('button')


const modal = document.createElement('dialog')
const modal__container = document.createElement('div')
const modalContainer__form = document.createElement('form')

const modalForm__TopPart = document.createElement('div')
const formTopPart__h2 = document.createElement('h2')
const formTopPart__closeButton = document.createElement('button')

const modalForm__p = document.createElement('p')

const modalForm__middlePart = document.createElement('div') 
const formMiddlePart__h3 = document.createElement('h3')
const formMiddlePart__input = document.createElement('input')

const modalForm__bottomPart = document.createElement('div') 
const form__bottomPart__h4 = document.createElement('h4')
const inputDeposit__label = document.createElement('label')
const form__bottomPart__inputDeposit = document.createElement('input')
const inputOutflow__label = document.createElement('label')
const form__bottomPart__inputOutflow = document.createElement('input')

const modalForm__buttons = document.createElement('div') 
const formButtons__cancel = document.createElement('button')
const formButtons__submit = document.createElement('button')


const main = document.querySelector('main')
const main__h2 = document.createElement('h2')
const main__buttons = document.createElement('div')
const mainButtons__buttonAll = document.createElement('button')
const mainButtons__buttonDeposit = document.createElement('button')
const mainButtons__buttonOutflow = document.createElement('button')

const main__valuesSummary = document.createElement('div')
const mainValuesSummary__sum = document.createElement('p')
const mainValuesSummary__sumValue = document.createElement('p')

const main__itens = document.createElement('div')


//  Establishing the hierarchy between elements
body.append(header, main)
header.append(header__title, header__button, modal)
modal.append(modal__container)
modal__container.append(modalContainer__form)
modalContainer__form.append(modalForm__TopPart, modalForm__p, modalForm__middlePart, modalForm__bottomPart)
modalForm__TopPart.append(formTopPart__h2, formTopPart__closeButton)
modalForm__middlePart.append(formMiddlePart__h3, formMiddlePart__input)
modalForm__bottomPart.append(form__bottomPart__h4, inputDeposit__label, form__bottomPart__inputDeposit, 
    inputOutflow__label, form__bottomPart__inputOutflow, modalForm__buttons)
modalForm__buttons.append(formButtons__cancel, formButtons__submit)
header__title.append(headerTitle__h1, headerTitle__h1_blue)
main.append(main__h2, main__buttons, main__valuesSummary, main__itens)
main__buttons.append(mainButtons__buttonAll, mainButtons__buttonDeposit, mainButtons__buttonOutflow)
main__valuesSummary.append(mainValuesSummary__sum, mainValuesSummary__sumValue)


// Assigning values to the elements
headerTitle__h1.innerHTML = 'Control' 
headerTitle__h1_blue.innerHTML = 'Finance'
header__button.innerHTML = 'Regitrar novo valor'

formTopPart__h2.innerHTML = 'Registro de valor'
formTopPart__closeButton.innerHTML = 'X'

modalForm__p.innerHTML = 'Digite o valor e em seguida aperte no botão referente ao tipo do valor'

formMiddlePart__h3.innerHTML = 'Valor'
formMiddlePart__input.type = 'number'
formMiddlePart__input.innerHTML = `R$${0},00`
formMiddlePart__input.name = 'value' 


form__bottomPart__h4.innerHTML = 'Tipo de valor'
form__bottomPart__inputDeposit.type = 'radio'
// form__bottomPart__inputDeposit.hidden = true
form__bottomPart__inputDeposit.id = 0 
form__bottomPart__inputDeposit.value = 0  
form__bottomPart__inputDeposit.name = 'categoryID'  
inputDeposit__label.tabIndex = 0
inputDeposit__label.for = 0
inputDeposit__label.innerHTML = 'Entrada'
form__bottomPart__inputOutflow.type = 'radio'
// form__bottomPart__inputOutflow.hidden = true
form__bottomPart__inputOutflow.id = 1
form__bottomPart__inputOutflow.value = 1
form__bottomPart__inputOutflow.name = 'categoryID'  
inputOutflow__label.tabIndex = 1
inputOutflow__label.for = 1
inputOutflow__label.innerHTML = 'Saída'


formButtons__cancel.innerHTML = 'Cancelar'
formButtons__submit.innerHTML = 'Inserir Valor'
formButtons__submit.type = 'submit'

main__h2.innerHTML = 'Resumo Financeiro' 
mainButtons__buttonAll.innerHTML = 'Todos' 
mainButtons__buttonDeposit.innerHTML = 'Entradas' 
mainButtons__buttonOutflow.innerHTML = 'Saídas' 

mainValuesSummary__sum.innerHTML = 'Soma dos Valores' 
mainValuesSummary__sumValue.innerHTML = 0 


// Assigning classes to the elements
header.classList = 'header' 
headerTitle__h1.classList = 'headerTitle__h1' 
headerTitle__h1_blue.classList = 'headerTitle__h1-blue' 
header__button.classList = 'header__button' 

modal.classList = 'modal__controller'
modal__container.classList = 'modal__container'
modalContainer__form.classList = 'modalContainer__form'

modalForm__TopPart.classList = 'modalForm__TopPart'
formTopPart__h2.classList = 'formTopPart__h2'
formTopPart__closeButton.classList = 'formTopPart__closeButton'

modalForm__p.classList = 'modalForm__p'

modalForm__middlePart.classList = 'modalForm__middlePart' 
formMiddlePart__h3.classList = 'formMiddlePart__h3'
formMiddlePart__input.classList = 'formMiddlePart__input'

modalForm__bottomPart.classList = 'modalForm__bottomPart' 
form__bottomPart__h4.classList = 'form__bottomPart__h4'
inputDeposit__label.classList = 'inputDeposit__label'
inputOutflow__label.classList = 'inputOutflow__label'
form__bottomPart__inputDeposit.classList = 'form__bottomPart__inputDeposit'
form__bottomPart__inputOutflow.classList = 'form__bottomPart__inputOutflow'


modalForm__buttons.classList = 'modalForm__buttons' 
formButtons__cancel.classList = 'formButtons__cancel'
formButtons__submit.classList = 'formButtons__submit'

main__h2.classList = 'main__h2' 
main__buttons.classList = 'main__buttons' 
mainButtons__buttonAll.classList = 'mainButtons__buttonAll' 
mainButtons__buttonDeposit.classList = 'mainButtons__buttonDeposit' 
mainButtons__buttonOutflow.classList = 'mainButtons__buttonOutflow' 

main__valuesSummary.classList = 'main__valuesSummary' 
mainValuesSummary__sum.classList = 'mainValuesSummary__sum' 
mainValuesSummary__sumValue.classList = 'mainValuesSummary__sumValue' 

main__itens.classList = 'main__itens' 


