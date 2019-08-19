import React from "react";

export const withLoading = (MainComponent, LoadingComponent) => ({ isLoading, ...rest}) => 
  (isLoading 
    ? <LoadingComponent /> 
    : <MainComponent {...rest} />
  );
