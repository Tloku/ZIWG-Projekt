import React from 'react';
import './NewsPage.css';

const news = [
  {
    id: 1,
    title: "Nowości w sklepie - nowe wędki do spinningu",
    date: "15 kwietnia 2023",
    content: "Mamy dla Was wiele nowych wędzisk do spinningu renomowanej marki Abu Garcia. Wędki cechują się wysoką jakością wykonania oraz wytrzymałością. Dostępne w różnych długościach oraz parametrach. Zapraszamy do sklepu!"
  },
  {
    id: 2,
    title: "Zlot wędkarzy w Poznaniu",
    date: "10 kwietnia 2023",
    content: "Już w najbliższy weekend odbędzie się coroczny zlot wędkarzy w Poznaniu. Czeka na Was wiele atrakcji, konkursów i nagród. Nie przegapcie tej okazji do spotkania z pasjonatami wędkarstwa i wymiany doświadczeń!"
  },
  {
    id: 3,
    title: "Promocje w sklepie wędkarskim - tylko w kwietniu!",
    date: "5 kwietnia 2023",
    content: "W tym miesiącu przygotowaliśmy dla Was wiele promocji na sprzęt wędkarski. Rabaty na wędki, kołowrotki, przynęty i wiele innych. Sprawdź naszą ofertę i skorzystaj z okazji!"
  }
];

function NewsList() {
  return (
    <div>
      {news.map(item => (
        <div key={item.id} className="news-item">
          <h2>{item.title}</h2>
          <p className="news-date">{item.date}</p>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  )
}

function NewsPage() {
  return (
    <div>
      <h1 align="center" style={{margin: "20px 0"}}>Aktualności wędkarskie</h1>
      <NewsList />
    </div>
  )
}

export default NewsPage;