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

<h2>2. Компоненты</h2>
<h3>2.1 Создание макета</h3>
<p>Для удобства сначала создаём статическую разметку с помощью JSX. А затем уже придаём динамику отдельным модулям. Классы в React <code>className</code> не используются для доступа к элементам, а используются только для стилизации.</p>
<h3>2.2 Свойства(props)</h3>
<p>Свойства добавляют динамики приложению.Свойства в React состоят из двух частей:<br/>
1. Синтаксис атрибутов(например className="name" для элемента)<br/>
2. Компоненты тоже имеют свойства:<br/
-При написании компонента мы создаём функцию, которая принимает параметр, этот параметр представляет из себя <code>объект (props)</code>, который содержит в себе свойства</p>

```javascript
function App(props) { тут JSX разметка }
```

<p>Отправляем значение в переменную <code>title</code>. Теперь у объекта <code>props</code> есть свойство с названием <code>title</code> и значением <code>React Todo</code></p>

```javascript
ReactDom.render(<App title="React Todo" />, document.getElementById('root'));
```

<p>Чтобы указать значение свойства в компоненте, нужно использовать JSX выражение</p>

```javascript
<h1>{props.title}</h1>
```

<h3>2.3 Валидация свойств</h3>
<p>Если вдруг мы не зададим значение свойству, то ошибки не будет, но мы получим пустое значение. В React можно указать какие именно ствойства должны быть и даже какого типа данных будут свойства. В случае несоответсвия значение сработает, но консоль выдаст предупреждение для разработчика.</p>

```javascript
App.propTypes = {
    title: React.PropTypes.string.isRequired
}
```

<p><code>React</code>-экспортируемый объект, <code>PropTypes</code>-метод, определяющий тип у переменной, <code>string</code>-определяемый тип должен быть строкой, <code>isRequired</code>-свойство должно иметь какое-то значение, иначе выдаст предупреждение в консоль.</p>

```javascript
App.defaultProps = {
    title: 'React Todo'
}
```

<p>Свойство <code>defaultProps</code> у нашего компонента задаёт значение по умолчанию для переменных в нашем компоненте</p>
<h3>2.4 Композиция</h3>
<p>Компонент необходимо разделить на несколько маленьких , которые удобнее использовать и при необходимости повторно использовать. Компоненты обычно хранят в папке <code>src/components</code> и называются с большой буквы <code>src/components/Header.jsx</code>. В каждом файле необходимо импортировать объект React <code>import React from 'react';</code></p>
<p>Чтобы компонент можно было использовать в главном компоненте, его необходимо экспортировать.В конце файла Header.jsx пропишем:</p>
<pre><code>export default Header;</code></pre>
<p>В главном файле компонент необходимо импортировать, после испорта объектов React и React.Dom, импортируем компонент из файла Header.jsx<code>import Header from '.components/Header';</code></p>
<p>И наконец вставляем в нужное место главного компонента наш компонент:<code><Header title={props.title} /></code></p>
<p>Чтобы создать динамический компонент нужно:<br/>1.Компоненту Todo добавить свойство <code>completed</code></p>

```javascript
<Todo title={"Изучить JavaScript"} completed={true} />
<Todo title={"Изучить React"} completed={false} />
```

<p>и определить ему булевое значение:</p>

```javascript
Todo.propTypes = {
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired
}
```

<p>Далее нужно пеедать это значение компоненту Checkbox:</p>

```javascript
<Checkbox checked={props.completed} />
```

<p>Подобно можно проделать и с css классами, которые также являются свойствами компонента.<br/>В компонете Button укажем свойство <code>className</code></p>

```javascript
Button.propTypes = {
    className: React.PropTypes.string,
    icon: React.PropTypes.string
}
```

<p>А уже в компонете Todo вызовем это свойство со значениями:</p>

```javascript
<Button className="delete icon" icon={"delete"} />
```