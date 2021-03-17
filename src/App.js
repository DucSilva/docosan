import { LayoutWrapperStyled } from './stylesheets/Layout';
import Header from './components/Header';
import CardDetail from './components/CardDetail';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './actions/index';
import Spinner from './components/Spinner';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.dataList) || [];
  const isFetching = useSelector((state) => state?.isFetching) || false;

  React.useEffect(() => {
    dispatch(getData())
  }, []);


  return (
    <LayoutWrapperStyled>
      <Header />
      <Spinner isLoading={isFetching} />
      {data?.map((item) => {
        const { id } = item;
        return <CardDetail key={id} {...item} />
      })}

    </LayoutWrapperStyled>
  );
}

export default App;
