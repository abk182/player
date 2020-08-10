export default (container: HTMLDivElement, target: HTMLVideoElement): void => {
  let x = 0;
  let y = 0;
  let scale = 1;
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    const containerRect = container.getBoundingClientRect();
    const delta = (e.deltaX + e.deltaY) / 2 / 100;

    scale += delta;
    x += (containerRect.width / 2 - e.clientX) * delta;
    y += (containerRect.height / 2 - e.clientY) * delta;

    target.style.transform =
      'translate(' + x + 'px,' + y + 'px) scale(' + scale + ',' + scale + ')';
  });
};
