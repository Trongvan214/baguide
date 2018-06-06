import React, { Component } from 'react';
import { Grid, Row, PageHeader } from 'react-bootstrap';

export default class AdventureFarming extends Component {
    render(){
        return (
            <Grid>
                <Row>
                    <PageHeader>
                        Adventure farming
                    </PageHeader>
                </Row>
                <Row className="af-intro">
                    <p>Before we start, I would to say this isn't a beginner's guide, 
                        I expect you guys to have some knowledge about partners. 
                        (Like different between a natural 5 stars partner, and a 5 stars partner)
                    </p>
                    <p>(put charts, and tables here)</p>
 
                </Row>
                <Row className="af-patterns">
                    <h1>Farming patterns</h1>
                    When you are farming for patterns, the best spot to farm is the last stage on purgatory with the big boss (cost 6 energy) of any island. 
                    This stage will give you higher rates for higher star patterns, and higher rates for greens, and blues patterns.
                    The bad side to it is that is you will get a random equiment type.
                    But trust me, when I say it's worth it. 
                    It might deplay your search, or even improve. 
                    As for the future, you would already have tons of greens, blues, whites 5 stars patterns to choose from.   
                </Row>
                <Row className="af-souls">
                    <h1>Farming souls</h1>
                    <p>
                        If you look at the chart (not here yet) you can see which islands will give you the most for your buck. 
                        But I would I like to say, before choosing, put in mind the exp the island gives and value of the patterns. 
                        There are some patterns that are more needed, so before choosing keep in mind about the future.  
                    </p>
                </Row>
                <Row className="af-exp">
                    <h1>Farming exp</h1>
                    <p>Look at the chart (not there yet)</p>
                    <p>An ideal for farming is to have 4 non-max level partners so all of the partners get exp at the end, 
                        but sometimes stages are too hard and required strong partners that's already max. 
                        So to make the best use of it, below is a strategy to use to be more efficient. 
                    </p>
                    <p>Before I explain here are some terms you need to know</p>
                    <p>Battle partners are partners that you will use for combat</p>
                    <p>Food partners are partners that you will use to upgrade the star of battle partners</p>
                    <p>Aid partners are low stars partners (1-4 stars) 
                        that you will max it's level and raise it's stars and use as food partners later.
                    </p>
                    <p>The best aid partners are 3 stars because its not too low in stars to the point where 
                        it takes forever to turn into a high stars food partners. 
                        And it's also not very hard to get I'll talk about how to farm these aid partners later.
                    </p>
                    <p>
                        Now for farming and making the best use of exp. The best strategy is to use 
                        just enough battle partners to be able to clear the stage, and fill the rest with aid partners.
                        This way you would get exp for those aid partners that you later use for food.
                    </p>    
                </Row>
                <Row className="af-partners">
                    <h1>Farming aid partners</h1>
                    <p>
                        This is goes together with farming exp. If you are using the strategy for farming exp you will find yourself needing alot
                        3 stars to use as aid and food partners. One of the best spot that I found to farm 3 stars partners
                        is Cave 8-1 Normal mode. The only partners you can get are 3 stars partners on this island.
                        The reason why normal is because, in normal mode you can't get 15min speed up, so there odds are better.
                        It's so cheaper and only cost 3 energy.
                    </p>
                </Row>
            </Grid>            
        )
    }
}