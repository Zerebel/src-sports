const scroll_bar = document.querySelector('.scroll-bar');
const storeScroll = () => {
  const scrollPosition =
    window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
  scroll_bar.style.width = `${scrollPosition * 100}%`;
  return (document.documentElement.dataset.scroll = window.scrollY);
};

const debounce = (fn) => {
  let frame;

  return (...params) => {
    if (frame) cancelAnimationFrame(frame);

    frame = requestAnimationFrame(() => {
      fn(...params);
    });
  };
};

document.addEventListener('scroll', debounce(storeScroll), { passive: true });

storeScroll();
