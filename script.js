function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}const {
  React: { useEffect },
  ReactDOM: { render },
  styled: { default: styled } } =
window;

const GLITCH_CHARS = '`¡™£¢∞§¶•ªº–≠åß∂ƒ©˙∆˚¬…æ≈ç√∫˜µ≤≥÷/?░▒▓<>/'.split('');

const ReadableChar = styled.span``;

const GlitchyChar = styled.span``;
const GlitchyText = ({ children, ...props }) => {
  return (
    React.createElement("h1", _extends({}, props, { className: `glitchy-text ${props.className}` }),
    React.createElement(ReadableChar, { className: "glitchy-text__char--readable" },
    children),

    children.split('').map((char, idx) => {
      const charStyle = {
        '--count': Math.random() * 5 + 1 };

      for (let i = 0; i < 10; i++) {
        charStyle[`--char-${i}`] = `"${
        GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
        }"`;
      }
      return (
        React.createElement(GlitchyChar, {
          className: "glitchy-text__char",
          "aria-hidden": true,
          "data-char": char,
          key: `glitch-char--${idx}`,
          style: charStyle },
        char));


    })));


};

const Logo = ({ className }) => {
  return (
    React.createElement("svg", {
      className: `bear-logo ${className}`,
      viewBox: "0 0 300 300",
      xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("g", { transform: "matrix(1.34105 0 0 1.34105 -51.157 -1049.694)" }, 
    React.createElement("path", {
      d: "M242.822 893.869c0 61.251-41.365 106.284-94.67 106.284-53.306 0-90.974-45.033-90.974-106.284 0-61.252 37.668-85.951 90.973-85.951 53.306 0 94.67 24.699 94.67 85.95z",
      fill: "#803300" }), 

    React.createElement("path", {
      d: "M211.925 958.105c0 19.907-28.138 38.819-62.85 38.819-34.71 0-61-18.912-61-38.82 0-19.907 26.29-33.273 61-33.273 34.712 0 62.85 13.366 62.85 33.274z",
      fill: "#e9c6af" }), 

    React.createElement("path", { d: "M179.114 931.763c0 7.657-19.04 24.493-30.27 24.493s-32.117-16.836-32.117-24.493 20.888-12.477 32.118-12.477 30.27 4.82 30.27 12.477z" }),
    React.createElement("ellipse", {
      ry: "23.111",
      rx: "23.762",
      cy: "827.682",
      cx: "68.304",
      fill: "#803300" }),

    React.createElement("path", {
      d: "M84.784 826.317a16.549 16.095 0 00-16.48-14.731 16.549 16.095 0 00-16.548 16.095 16.549 16.095 0 0016.548 16.096 16.549 16.095 0 001.132-.039c.815-1.337 1.582-2.727 2.471-3.983a65.703 65.703 0 015.055-6.283 65.597 65.597 0 015.713-5.548c.668-.576 1.417-1.058 2.109-1.607z",
      fill: "#e9c6af" }),

    React.createElement("ellipse", {
      transform: "scale(-1 1)",
      cx: "-231.243",
      cy: "827.682",
      rx: "23.762",
      ry: "23.111",
      fill: "#803300" }),

    React.createElement("path", {
      d: "M214.764 826.317a16.549 16.095 0 0116.48-14.731 16.549 16.095 0 0116.548 16.095 16.549 16.095 0 01-16.549 16.096 16.549 16.095 0 01-1.131-.039c-.816-1.337-1.582-2.727-2.472-3.983a65.703 65.703 0 00-5.055-6.283 65.597 65.597 0 00-5.712-5.548c-.67-.576-1.418-1.058-2.11-1.607z",
      fill: "#e9c6af" }),

    React.createElement("path", {
      d: "M147.731 815.358c-13.396 0-26.022 1.079-37.671 3.334v11.353c11.649-2.255 24.275-3.334 37.671-3.334 15.104 0 29.459 1.373 42.667 4.256v-11.355c-13.208-2.883-27.564-4.254-42.667-4.254z",
      fill: "red" }),

    React.createElement("path", {
      d: "M165.195 816.013a15.875 7.813 0 014.43 5.412 15.875 7.813 0 01-5.414 5.863c9.116.653 17.878 1.866 26.186 3.68v-11.356c-8.007-1.748-16.44-2.931-25.202-3.6z",
      fill: "#e50000" }),

    React.createElement("path", {
      d: "M148.387 789.038c-43.49 0-75.817 18.34-83.229 62.715 12.322-10.516 27.524-17.553 44.903-21.51 0 0-2.734-13.778 10.25-16.029 12.983-2.25 14.025-4 27.421-4 15.103 0 16.422.44 30.666 4 14.245 3.561 12 17.113 12 17.113 17.218 4.421 32.483 11.864 44.9 22.71-7.275-46.03-42.684-64.999-86.911-64.999z",
      fill: "#1a1a1a" }),

    React.createElement("path", {
      className: "bear__tear-stream",
      d: "M190.665 893.336v96.221c8.24-4.43 15.761-10.15 22.37-16.971v-79.25h-22.37zM86.056 893.336v80.399c6.546 6.885 14.056 12.592 22.37 16.92v-97.32h-22.37z" }),

    React.createElement("path", {
      className: "bear__brows",
      d: "M96.601 864.041a21.271 21.271 0 01-6.78 15.572 21.271 21.271 0 01-16.02 5.644M203.53 864.041a21.271 21.271 0 006.78 15.572 21.271 21.271 0 0016.02 5.644",
      fill: "none",
      strokeWidth: "2.983",
      strokeLinecap: "round",
      strokeLinejoin: "round" }),

    React.createElement("circle", {
      className: "bear__eye bear__eye--left",
      r: "11.185",
      cy: "894.081",
      cx: "97.242" }),

    React.createElement("circle", {
      className: "bear__eye bear__eye--right",
      r: "11.185",
      cx: "201.851",
      cy: "894.081" }),

    React.createElement("g", { className: "bear__shades" },
    React.createElement("path", { d: "M77.29 854.608c-6.508-.07-13.363.182-22.8 2.131l-14.318 2.769 2.308 15.038c2.094.293 4.984 1.016 6.352 2.848 3.528 4.722 1.202 9.286 2.003 17.625 2.67 27.781 11.92 33.596 26.247 35.267 7.502.875 22.816 2.282 33.28-1.433 9.456-3.357 18.223-9.868 24.158-17.96 6.274-8.553 6.948-18.43 10.843-25.92 2.76-5.31 7.7-3.786 9.258.39 2.951 7.91 4.379 16.977 10.653 25.53 5.935 8.092 14.702 14.603 24.159 17.96 10.463 3.715 25.777 2.308 33.279 1.433 14.326-1.671 23.578-7.486 26.249-35.267.801-8.339-1.525-12.903 2.003-17.625 1.414-1.893 4.463-2.611 6.567-2.885l2.297-14.962-14.522-2.808c-15.1-3.12-23.591-1.89-34.623-1.957-4.093-.025-8.777.115-13.136.573-8.125.855-16.176 2.382-24.174 4.05-7.988 1.665-15.589 6.1-23.747 5.942-7.868-.153-14.966-4.977-22.664-6.616-8.132-1.732-14.824-3.106-24.713-3.376-4.794-.13-9.043-.598-13.136-.573-4.137.026-7.918-.132-11.823-.174z" }),
    React.createElement("path", {
      d: "M85.28 860.471c-10.088.168-24.807.706-28.48 12.251-3.277 15.249-3.122 32.76 5.735 45.627 7.396 10.745 23.365 8.637 35.258 8.22 18.899-.663 35.138-15.383 40.158-33.389 1.93-7.753 3.906-11.697.696-19.382-7.653-8.953-20.099-11.778-30.58-12.967a443.553 443.553 0 00-22.787-.36z",
      fill: "#333" }),

    React.createElement("path", {
      d: "M56.04 864.299a4.079 1.692 0 01-4.058 1.692 4.079 1.692 0 01-4.1-1.675 4.079 1.692 0 014.017-1.71 4.079 1.692 0 014.14 1.658",
      fill: "#b3b3b3" }),

    React.createElement("path", {
      d: "M214.515 860.471c10.088.168 24.807.706 28.481 12.251 3.276 15.249 3.12 32.76-5.736 45.627-7.396 10.745-23.365 8.637-35.257 8.22-18.9-.663-35.139-15.383-40.16-33.389-1.928-7.753-3.905-11.697-.695-19.382 7.653-8.953 20.1-11.778 30.58-12.967a443.553 443.553 0 0122.787-.36z",
      fill: "#333" }),

    React.createElement("path", {
      d: "M243.755 864.299a4.079 1.692 0 004.058 1.692 4.079 1.692 0 004.1-1.675 4.079 1.692 0 00-4.017-1.71 4.079 1.692 0 00-4.14 1.658",
      fill: "#b3b3b3" }),

    React.createElement("path", {
      d: "M100.812 860.598l-19.186 66.305c5.485.302 11.181-.16 16.165-.335.244-.008.486-.03.73-.043l18.585-64.222c-3.068-.678-6.13-1.14-9.039-1.47a473.891 473.891 0 00-7.255-.235zM89.154 860.456c-1.292.002-2.586 0-3.875.014-1.081.018-2.235.05-3.403.09l-17.662 59.853c1.729 1.827 3.77 3.172 6.025 4.148l18.915-64.105z",
      fill: "#fff" })))));





};

const Container = styled.div`
  display: inline-grid;
  grid-gap: 0 1rem;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
`;

const Code = styled(GlitchyText)`
  align-self: end;
  font-size: 3rem;
  @media (min-width: 768px) {
    font-size: 6rem;
  }
`;

const AppShell = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CodeMessage = styled(GlitchyText)`
  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Message = styled.a`
  grid-column: span 2;
  grid-row: -1;
  text-align: center;
  margin: 2rem auto;

  &:hover {
    & ~ img {
      background: red;
    }
  }
`;

const FourOhFour = () => {
  useEffect(() => {
    const root = document.documentElement;
    const update = e => {
      if (e.acceleration && e.acceleration.x !== null) {
        root.style.setProperty('--X', e.acceleration.x);
        root.style.setProperty('--Y', e.acceleration.y);
      } else {
        root.style.setProperty('--X', e.pageX / window.innerWidth - 0.5);
        root.style.setProperty('--Y', e.pageY / window.innerHeight - 0.5);
      }
    };

    document.body.addEventListener('mousemove', update);
    window.ondevicemotion = update;
    return () => {
      document.body.removeEventListener('mousemove', update);
    };
  }, []);
  return (
    React.createElement(AppShell, null,
    React.createElement(Container, null,
    React.createElement(Message, { className: "return-link", href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", rel: "noreferrer noopener" }, "Surprise for you!"),


    React.createElement(Logo, { className: "bear-logo--tears" }),
    React.createElement(Code, { className: "four-oh-four__code" }, "104"),
    React.createElement(CodeMessage, { className: "four-oh-four__code-message" }, "Che schifo i forci"))));





};
const ROOT = document.getElementById('app');
render(React.createElement(FourOhFour, null), ROOT);