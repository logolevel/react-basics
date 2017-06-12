# react-basics
Основы React

- Инициализация проекта, установка React Dev Tools

<h2>1. Знакомство с React</h2>
<h3>1.1 Первое приложение</h3>
<p><b>- Создание элемента:</b><br/>
С помощью метода <code>createElement</code> с параметрами (Название, Свойства(class, id), Содержимое) создаём элемент и помещаем его в переменную <code>title</code></p>

```javascript
const title = React.createElement('h1', null, "React Todo");
```

```javascript
const subtitle  = React.createElement('p', { className: 'subtitle' }, "Это первое приложение на React");
```

<p>Чтобы отправить два и более элемнтов на страницу, их необходимо обернуть:</p>

```javascript
const container = React.createElement('div', null, title, subtitle);
```

<p><b>- Вывод элемента на страницу:</b><br/>
У объекта ReactDom есть метод <code>Render</code> с параметрами (Какой элемент, куда разместить). Элемент находиться в переменной <code>title</code>, а разместим в блоке с <code>id="root"</code></p>

```javascript
ReactDom.render(title, document.getElementById('root'));
```

<h3>1.2 JSX - JavaScript Syntax Extentions</h3>
<p><b>-Создаём набор элементов:</b><br/>
Используем JSX разметку(cхожую с HTML), которую присваиваем в переменную и с помощью метода Render выводим результат на страницу.</p>

```javascript
app = ( тут JSX разметка );
```

<p>JSX - это не HTML!<br/>JSX транспилируется в JS с помощью Babel</p>
<h3>1.3 Виртуальный дом</h3>
<p>React элемент - это объект с набором свойств(props), он представляет из себя образ DOM элемента или виртуальный DOM.<br/>Свойства (props) содержат: просто содержимое или может включать в себя массив других объектов, которые содержит элемент. Также свойства содержат название классов, идентификаторов и т.д.<br/>Далее с помощью метода Render эта структура генерируется в настоящий DOM<br/>Виртуальном DOM - дерево простых объектов, следить за состояниями и работать с ними быстрее чем в реальном DOM</p>
<h3>1.4 Компоненты</h3>
<p>Компонент - представляет из себя функцию, которую возвращает JSX. Названия компонентов всегда с большой буквы. Компонент всегда возващает только <code>один</code> JSX элемент, т.е. всегда оборачивать в контейнер <code>div</code></p>

```javascript
function App() { return <div> JSX код тут </div> }
```

<p>Вывод на страницу осуществляется также с помощью метода создания элемента:</p>

```javascript
ReactDom.render(React.createElement(App), document.getElementById('root'));
```

<p>или, если короче, что с помощью JSX:</p>

```javascript
ReactDom.render(<App />, document.getElementById('root'));
```

<h3>1.5 Инструменты React</h3>
<p>В браузере Chromr: F12 => React</p>
