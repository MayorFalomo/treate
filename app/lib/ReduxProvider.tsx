'use client';
import { Provider } from 'react-redux';
import store from './store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from './features/ThemeSlice';

interface IProps {
  children: React.ReactNode;
}

const ThemeInitializer: React.FC<IProps> = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      try {
        dispatch(setTheme(savedTheme));
      } catch (error) {
        console.error('Failed to parse theme from local storage:', error);
        dispatch(setTheme('light'));
      }
    }
  }, [dispatch]);
  return <>{children}</>;
};

const ReduxProvider: React.FC<IProps> = ({ children }) => {
  return (
    <Provider store={store()}>
      <ThemeInitializer>{children}</ThemeInitializer>
    </Provider>
  );
};

export default ReduxProvider;
