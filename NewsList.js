import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NewsItem } from './NewsItem';
//require('dotenv').config({ path: '../../.env' })
import { Box } from "@mui/system";


const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold"};

const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=football&apiKey=2cad158f5844418496058f306c410a54`)
            setArticles(response.data.articles)
            console.log(response)
        }

        getArticles()
    }, [])
    return (
        <div>
           {articles.map(article => {
                return(
                    <div>
                        <Box 
                                border={3} 
                                borderColor="orange" 
                                borderRadius={10} 
                                boxShadow="10px 10px 20px #ccc" 
                                padding={3} 
                                margin={"auto"} 
                                marginTop={3} 
                                display= "flex"
                                flexDirection={"column"} 
                                width= {"50%"} >
                                

                       <NewsItem sx={labelStyles}
                        title={article.title}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                        description={article.description}
                       
                    />
    
                    
                    </Box>
                    </div>
                )
            })}
        </div>
    )
}

export default NewsList;

