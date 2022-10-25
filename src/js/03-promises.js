import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');

formRef.addEventListener('submit', createPromises);

function createPromises(evt) {
  
  evt.preventDefault();

  const amount = evt.target.amount.value;
  const step = Number(evt.target.step.value);
  let delay = Number(evt.target.delay.value);
  let position = 1;


  const interval = setInterval(() => {
    if (position >= amount) {
      clearInterval(interval);
    }

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      })
      .finally(() => {
        formRef.reset();
      });

    position += 1;
    delay += step;
  });
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
};
