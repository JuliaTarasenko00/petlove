'use client';

import { Loader } from '@/components/ui/loader/Loader';
import { persistor, store } from '@/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export default function ProviderComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PersistGate loading={<Loader />} persistor={persistor}>
      <Provider store={store}>{children}</Provider>
    </PersistGate>
  );
}
