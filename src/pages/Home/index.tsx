import React, {useCallback} from 'react';
import { useHistory } from 'react-router-dom';

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
import Button from '../../components/Button';
import '../../styles/auth.scss';
import { useAuth } from '../../hooks/useAuth';


const Home: React.FC = () => {

    const history = useHistory();
    const {signInWithGoogle,user } = useAuth();
    const handleCreateRoom = useCallback(async() => {
        if(!user){
            await signInWithGoogle();
        }
        history.push('/rooms/new');
    }, [history, signInWithGoogle, user]);

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="Logo google" />
                        Crie sua sala com o google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form >
                    <input type="text" placeholder="Digite o código da sala" />
                    <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Home;