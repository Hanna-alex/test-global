function formInputValidate() {
  const input = document.querySelector('.form-search__input');
  const form = document.querySelector('.homepage__form');
  const errMessage = document.querySelector('.form-err');
  const formBtn = document.querySelector('.form-search__btn');
  const reg = /[!@#$%^&*()]/;

  const minLength = 4;
  const maxLength = 12;


  input.value = '';
  function validation(form) {
    let result = true
    const inputValue = form.querySelector('input').value
    errMessage.innerHTML = '';


    if (inputValue.length < minLength) {
      input.style.borderColor = '#ea5b5b';
      errMessage.innerHTML = 'minimum 4 characters!!!';

      return false;

    } else if (inputValue.length > maxLength) {
      input.style.borderColor = '#ea5b5b';
      errMessage.innerHTML = 'no more than 12 characters!!!';

      return false;

    } else if (reg.test(inputValue)) {

      input.style.borderColor = '#ea5b5b';
      errMessage.innerHTML = 'must not contain !@#$%^&*()';

      return false;

    } else {

      input.style.borderColor = 'transparent';

      return result
    }

  }




  form.addEventListener('input', () => {
    validation(form)

  })

  formBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (validation(form)) {
      console.log('Успех');

    } else {
      console.log('noooot action');

    }
  })

}

formInputValidate()