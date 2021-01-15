
import React from 'react';

class LazyWithPreload {

    static lazyWithPreload (factory: any) {
        const Component: any = React.lazy(factory);
        Component.preload = factory;
        return Component;
    }

}

export const { lazyWithPreload } = LazyWithPreload;
