export function RepositoryItem(props) {
    return (
        <l1>
          
            <br></br><strong>{props.repository.name ?? 'default'}</strong>
            <p>{props.repository.description}</p>
            
            <a href={props.repository.link}>
                Acessar repositório
            </a>
        </l1>
    );
}