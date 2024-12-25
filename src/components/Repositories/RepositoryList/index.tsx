import RepositoryItem from '../RepositoryItem'
import repositoryList from '@/data/repsitories'
import './styles.scss'

const RepositoryList = () => {
    return (
        <div className="repolist-parent">
            {repositoryList.map((repo) => (
                <RepositoryItem 
                    key={repo.key}
                    title={repo.title}
                    visibility={repo.visibility}
                    language={repo.language}
                    size={repo.size}
                    updatedBefore={repo.updatedBefore}
                />
            ))}
        </div>
    )
}

export default RepositoryList