function Platform(props) {
    const featureNames = props.features ? Object.keys(props.features) : [];
    const featureValues = props.features ? Object.values(props.features) : [];
    return (
      <div class="Platform">
        <div class="PlatformLogo">
          <img src={props.logo} alt="Platform"></img>
        </div>
        <div class="PlatformName">
          <h3>{props.name}</h3>
        </div>
        <div class="UserName">
          <h3>@{props.userName}</h3>
        </div>
        <div></div>
        {featureNames.length > 0 && (
          <div class="FeatureOne">
            <div class="Left">{featureNames[0]}</div>
            <div class="Right">{featureValues[0]}</div>
          </div>
        )}
        {featureNames.length > 1 && (
          <div class="FeatureTwo">
            <div class="Left">{featureNames[1]}</div>
            <div class="Right">{featureValues[1]}</div>
          </div>
        )}
        {featureNames.length > 2 && (
          <div class="FeatureThree">
            <div class="Left">{featureNames[2]}</div>
            <div class="Right">{featureValues[2]}</div>
          </div>
        )}
      </div>
    );
  }
  
  export default Platform;
  