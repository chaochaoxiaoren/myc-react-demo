import dataproxy from '@/dataproxy'

export const getTradeFile = () => {
  return dataproxy.get('/trade/file');
}

