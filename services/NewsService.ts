import NewsRepository from "../repository/NewsRepository";

class NewsService{

    get(){
        return NewsRepository.find({});
    }

    getById(_id){
        return NewsRepository.findById(_id);
    }

    create(news){
        return NewsRepository.create(news);
    }

    update(_id, news){
        return NewsRepository.findByIdAndUpdate(_id, news);
    }

    delete(_id){
        return NewsRepository.findByIdAndDelete(_id);
    }
}

export default new NewsService();