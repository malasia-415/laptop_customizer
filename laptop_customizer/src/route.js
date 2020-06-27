import './App.css';

// class App extends React.Component {
//   <App>
//     <p>This is the app Component</p>
//   </App>
// }

// render() {
//   const features = Object.keys(this.props.features).map((feature, idx) => {
//     const featureHash = feature + '-' + idx;
//     const options = this.props.features[feature].map(item => {
//       const itemHash = slugify(JSON.stringify(item));
//       return (
//         <div key={itemHash} className="feature__item">
//           <input
//             type="radio"
//             id={itemHash}
//             className="feature__option"
//             name={slugify(feature)}
//             checked={item.name === this.state.selected[feature].name}
//             onChange={e => this.updateFeature(feature, item)}
//           />
//           <label htmlFor={itemHash} className="feature__label">
//             {item.name} ({USCurrencyFormat.format(item.cost)})
//           </label>
//         </div>
//       );
//     });

//   export default App;
