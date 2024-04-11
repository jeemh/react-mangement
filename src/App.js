import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/640/480/any',
    'name': '홍길동',
    'birthday':'961222',
    'gender':'남자',
    'job':'대학생'
  },

  {
    'id': 2,
    'image': 'https://placeimg.com/640/480/any',
    'name': '지명헌',
    'birthday':'000728',
    'gender':'남자',
    'job':'디자이너'
  },

  {
    'id': 3,
    'image': 'https://placeimg.com/640/480/any',
    'name': '추만석',
    'birthday':'981222',
    'gender':'남자',
    'job':'프로그래머'
  }
]

function App() {
  return (
    <div>
      {
        customers.map(c=>{
          return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
          )
        })
      }
    </div>
  );
}

export default App;
