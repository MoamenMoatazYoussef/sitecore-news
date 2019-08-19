import React from 'react';

export const withLoading = (isLoading, MainComponent, LoadingComponent) => ({isLoading, ...rest}) =>
    isLoading
    ? <LoadingComponent />
    : <MainComponent {...rest} />
;


