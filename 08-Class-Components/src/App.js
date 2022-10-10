import UserContext from './components/store/user-context';
import UserFinder from './components/UserFinder';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Mike' },
  { id: 'u3', name: 'Michael' },
];

function App() {
  const usersContext = {
    users: DUMMY_USERS,
  };

  return (
    <UserContext.Provider value={usersContext}>
      <UserFinder />
    </UserContext.Provider>
  );
}

export default App;
