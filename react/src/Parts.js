import React from 'react';
import Background from './burger_table.jpg';

class Header extends React.Component {
    render() {
        return (
            <header className="header" style={{
                backgroundImage: `url(${Background})`
            }}>
                <div className="hamburger" id="burger" onClick={() => {
                    var pane = document.getElementById("nav_pane");
                    if (pane.style.display === "none") {
                        pane.style.display = "block";
                    } else {
                        pane.style.display = "none";
                    }
                }}></div>
                <div className="skill_navigation">
                    <div id="left_button"></div>
                    <div className="tree_title">{this.props.name}</div>
                    <div id="right_button"></div>
                </div>
            </header>
        );
    }
}

class NavigationPane extends React.Component {
    render() {
        return (
            <div className="navigation_pane" id="nav_pane" style={{
                display: "none"
            }}></div>
        );
    }
}

class Screen extends React.Component {
    render() {
        return (
            <div className="screen">
                <ScreenContent />
                <CharacterCard />
                <CharacterCardArrow />
            </div>
        );
    }
}

class ScreenContent extends React.Component {
    render() {
        return (
            <div className="screen_content" id="scroll_screen">
                <Tree />
                <LevelLabels />
            </div>
        );
    }

    componentDidMount() {
        document.getElementById("scroll_screen").scrollIntoView(false);
    }

}

class Tree extends React.Component {

    render() {

        const unlockLevel2 = () => {
            unlockNode(document.getElementById("link_1"),
                "https://www.misen.co/blogs/news/skillet-cooking");
            unlockNode(document.getElementById("link_0"),
                "https://www.thespruceeats.com/convection-oven-cooking-tips-1805817");
        }

        const unlockLevel3_1 = () => {
            if (document.getElementById("link_1").className === "node") {
                unlockNode(document.getElementById("link_10"),
                    "https://recipes.howstuffworks.com/tools-and-techniques/how-to-cook-vegetables24.htm");
                unlockNode2(document.getElementById("link_11"));
            }
        }

        const unlockLevel3_0 = () => {
            if (document.getElementById("link_0").className === "node") {
                unlockNode2(document.getElementById("link_01"));
                unlockNode(document.getElementById("link_00"),
                    "https://recipes.howstuffworks.com/tools-and-techniques/how-to-cook-vegetables24.htm");
            }
        }

        const unlockLevel4_11 = () => {
            if (document.getElementById("link_11").className === "node") {
                unlockNode(document.getElementById("link_11_1"),
                    "https://diethood.com/stove-top-chicken-breasts/?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_tribes&utm_content=tribes&utm_term=627068286_24161020_35295");
                unlockNode(document.getElementById("link_11_2"),
                    "https://www.youtube.com/watch?v=kbpIYAnt-7k");
                unlockNode(document.getElementById("link_11_3"),
                    "https://www.thekitchn.com/how-to-cook-fish-on-the-stovetop-cooking-lessons-from-the-kitchn-204805");
                unlockNode(document.getElementById("link_11_4"),
                    "https://www.inspiredtaste.net/37062/juicy-skillet-pork-chops/");
                unlockNode(document.getElementById("link_11_5"),
                    "https://www.thewholesomedish.com/the-best-homemade-tacos/");
            }
        }

        const unlockLevel4_10 = () => {
            if (document.getElementById("link_10").className === "node") {
                unlockNode(document.getElementById("link_10_1"),
                    "https://www.food.com/recipe/skillet-sauteed-corn-88589");
                unlockNode(document.getElementById("link_10_2"),
                    "https://www.delish.com/cooking/recipe-ideas/a22566331/best-sauteed-brussel-sprouts-recipe/​");
                unlockNode(document.getElementById("link_10_3"),
                    "https://www.food.com/recipe/pan-roasted-broccoli-155018");
                unlockNode(document.getElementById("link_10_4"),
                    "https://www.food.com/recipe/garlic-sauteed-cauliflower-151833");
                unlockNode(document.getElementById("link_10_5"),
                    "https://www.youtube.com/watch?v=8vqGhiUFwKw");
                unlockNode(document.getElementById("link_10_6"),
                    "https://www.simplyrecipes.com/recipes/spinach/");
            }
        }

        const unlockLevel4_01 = () => {
            if (document.getElementById("link_01").className === "node") {
                unlockNode(document.getElementById("link_01_1"),
                    "https://www.youtube.com/watch?v=ip_zuU7zeGA");
                unlockNode(document.getElementById("link_01_2"),
                    "https://www.youtube.com/watch?v=jzz6zDhA5qk");
                unlockNode(document.getElementById("link_01_3"),
                    "https://www.youtube.com/watch?v=Qplt7HC8KRU");
                unlockNode(document.getElementById("link_01_4"),
                    "https://www.youtube.com/watch?v=8080dzvG1Js");
                unlockNode(document.getElementById("link_01_5"),
                    "https://www.youtube.com/watch?v=_pgXHuW830o");
            }
        }

        const unlockLevel4_00 = () => {
            if (document.getElementById("link_00").className === "node") {
                unlockNode2(document.getElementById("link_00_1"));
                unlockNode2(document.getElementById("link_00_2"));
                unlockNode2(document.getElementById("link_00_3"));
                unlockNode2(document.getElementById("link_00_4"));
                unlockNode2(document.getElementById("link_00_5"));
            }
        }



        return (
            <div className="tree">

                <RootNode
                    nodeID="node_root"
                    linkID="link_root"
                    nodeUrl="https://www.cooksmarts.com/cooking-guides/create-a-functional-kitchen/20-must-have-kitchen-tools/"
                    desc_title="The Cooking Tree"
                    desc={`Welcome to the Learning How to Cook Indoors Skill Tree! If you want to increase your cooking skills, learn how to cook, or find some new recipes, try playing through this skill tree. You will gain a lot of knowledge about the basics of cooking inside your home through this skill tree, and you will be able to compete with your family and friends to see who can achieve the highest level! To begin, read the article linked to this node about some of the basic tools needed to get started in your kitchen!`}
                    state="node"
                    leftBranch="branch_1"
                    rightBranch="branch_0"
                    unlockFunction={unlockLevel2} />

                <Node
                    nodeID="node_1"
                    linkID="link_1"
                    desc_title="The Stove"
                    desc={`A stove top is a great tool when it comes to cooking. It uses a heat transfer method of conduction. There are different techniques that can be used while cooking on the stove.`}
                    state="disabled_node"
                    leftBranch="branch_11"
                    rightBranch="branch_10"
                    unlockFunction={unlockLevel3_1} />

                <Node
                    nodeID="node_0"
                    linkID="link_0"
                    desc_title="The Oven"
                    desc={`The oven is a great way to bring out flavors and help foods to retain their natural moisture while cooking. The high heat and duration that foods are in the oven usually allows them to thoroughly cook without much effort on the chef's part as stove top cooking would require. However, it is still important to test for doneness.`}
                    state="disabled_node"
                    leftBranch="branch_11"
                    rightBranch="branch_10"
                    unlockFunction={unlockLevel3_0} />

                <Node
                    nodeID="node_11"
                    linkID="link_11"
                    desc_title="Protein"
                    desc={`Proteins is a necessary nutrient in your daily diet. It helps build tissue and make hormones. Protein is also the building block of bone, nails, hair, and cartilage.`}
                    state="disabled_node"
                    leftBranch="straight_branch"
                    unlockFunction={unlockLevel4_11} />

                <Node
                    nodeID="node_10"
                    linkID="link_10"
                    desc_title="Vegetables"
                    desc={`Are you a veggie fan? Vegetables are not only good for you, but if prepared the right way they can taste great as well! For this skill tree node, watch the linked video and read the two linked articles to learn more on how to cook vegetables perfectly before we move onto some easy to do recipes!​`}
                    state="disabled_node"
                    leftBranch="straight_branch"
                    unlockFunction={unlockLevel4_10} />

                <Node
                    nodeID="node_01"
                    linkID="link_01"
                    desc_title="Protein"
                    desc={`Proteins is a necessary nutrient in your daily diet. It helps build tissue and make hormones. Protein is also the building block of bone, nails, hair, and cartilage.`}
                    state="disabled_node"
                    leftBranch="straight_branch"
                    unlockFunction={unlockLevel4_01} />

                <Node
                    nodeID="node_00"
                    linkID="link_00"
                    desc_title="Vegetables"
                    desc={`Are you a veggie fan? Vegetables are not only good for you, but if prepared the right way they can taste great as well! For this skill tree node, watch the linked video and read the two linked articles to learn more on how to cook vegetables perfectly before we move onto some easy to do recipes!`}
                    state="disabled_node"
                    leftBranch="straight_branch"
                    unlockFunction={unlockLevel4_00} />

                <Node
                    nodeID="node_11_1"
                    linkID="link_11_1"
                    desc_title="Chicken"
                    desc={`Chicken is one of the cheapest meats that can be bought. You can find it in white or dark meat cuts. There are many different recipes to spice it up. Feel free to check out this simple recipe to get you started!`}
                    state="disabled_node"
                    leftBranch="straight_branch" />

                <Node
                    nodeID="node_11_2"
                    linkID="link_11_2"
                    desc_title="Steak"
                    desc={`Steak is a cut of beef which is a red meat. Steak can come in many different cuts and can have different levels of quality, select, choice, or prime. This recipe can be used for any cut of steak and can be cook to any level of doneness.`}
                    state="disabled_node"
                    leftBranch="straight_branch" />

                <Node
                    nodeID="node_11_3"
                    linkID="link_11_3"
                    desc_title="Fish"
                    desc={`Fish is a great way to receive your necessary omega dosages. There are many different fish you can pick up from the store or a local fish market. Check out this great recipe that also includes a short video on cooking your fish to perfection!`}
                    state="disabled_node"
                    leftBranch="straight_branch" />

                <Node
                    nodeID="node_11_4"
                    linkID="link_11_4"
                    desc_title="Pork"
                    desc={`Pork comes in many different cuts including, chops, loin, and even bacon. The amount of fat in pork varies by the cut. The recipe for today is for pork chops, enjoy!`}
                    state="disabled_node"
                    leftBranch="straight_branch" />
                <Node
                    nodeID="node_11_5"
                    linkID="link_11_5"
                    desc_title="Ground Beef"
                    desc={`Ground Beef is another type of beef. It is ground into small pieces and can be used in a variety of recipes. It can often be used in quick and simple recipes. Take a look at this great taco recipe for a night you need to cook something up fast.`}
                    state="disabled_node" />

                <Node
                    nodeID="node_10_1"
                    linkID="link_10_1"
                    desc_title="Corn"
                    desc={`Do you like the sweet taste of corn? There are so many ways tocook corn but if you want to learn a simple and quick recipe, watch the linked video. You will have sweet and tasty corn within minutes!`}
                    state="disabled_node"
                    leftBranch="straight_branch" />
                <Node
                    nodeID="node_10_2"
                    linkID="link_10_2"
                    desc_title="Brussel Sprouts"
                    desc={`Brussel sprouts look like tiny heads of iceberg lettuce, but they are packed with way more nutrients. Learn how to make these green vegetables taste great by reading the following recipe!`}
                    state="disabled_node"
                    leftBranch="straight_branch" />
                <Node
                    nodeID="node_10_3"
                    linkID="link_10_3"
                    desc_title="Broccoli"
                    desc={`Did you know broccoli is one of the most protein dense vegetables? Not only that, but if prepared the right way, they can taste delicious. Follow the link to this simple recipe that can have you making tasteful broccoli within minutes!`}
                    state="disabled_node"
                    leftBranch="straight_branch" />
                <Node
                    nodeID="node_10_4"
                    linkID="link_10_4"
                    desc_title="Cauliflower"
                    desc={`Cauliflower? Is it the cousin to broccoli? Who knows, but it tastes just as good with this simple recipe! Follow the link to learn a quick recipe to make great cauliflower!​​`}
                    state="disabled_node"
                    leftBranch="straight_branch" />
                <Node
                    nodeID="node_10_5"
                    linkID="link_10_5"
                    desc_title="Carrots"
                    desc={`They say carrots are great for your eyes, so keep you eyes on this video to learn a quick stove top recipe for carrots!`}
                    state="disabled_node"
                    leftBranch="straight_branch" />
                <Node
                    nodeID="node_10_6"
                    linkID="link_10_6"
                    desc_title="Spinach"
                    desc={`Ah Spinach. A nutrient dense green leafy vegetable. Many are hesitant to eat spinach because of the raw taste, but you shouldn’t knock it until you try it. I mean look at Popeye! Spinach seemed to work out well for him! Follow this simple recipe and maybe you too can be like Popeye!`}
                    state="disabled_node" />

                <Node
                    nodeID="node_01_1"
                    linkID="link_01_1"
                    desc_title="Chicken"
                    desc={`A cheap and great source of protein that can easily be made into different recipes. Here is a recipe for lemony chicken and it doesn’t take much to make it so give it a try!`}
                    state="disabled_node"
                    leftBranch="straight_branch" />
                <Node
                    nodeID="node_01_2"
                    linkID="link_01_2"
                    desc_title="Steak"
                    desc={`A red source a protein that can be on the expensive side depending what style steak you get. Still a great source of protein and one of everybody favorite to eat.​`}
                    state="disabled_node"
                    leftBranch="straight_branch" />
                <Node
                    nodeID="node_01_3"
                    linkID="link_01_3"
                    desc_title="Fish"
                    desc={`Another great way to get protein if the red meat is not your thing. There are many different types of fish that you can use as well but this recipe is for some fish fillets.`}
                    state="disabled_node"
                    leftBranch="straight_branch" />
                <Node
                    nodeID="node_01_4"
                    linkID="link_01_4"
                    desc_title="Pork"
                    desc={`This is a very unique style of meat that comes in different cuts. A more difficult meat to perfect but one its perfected it’s a treat.`}
                    state="disabled_node"
                    leftBranch="straight_branch" />
                <Node
                    nodeID="node_01_5"
                    linkID="link_01_5"
                    desc_title="Ground Beef"
                    desc={`This type of protein can be used in many ways that can be easily cooked and seasoned. For this recipe it shows how to ake a delicous mealoaf from ground beef.`}
                    state="disabled_node" />

                <Node
                    nodeID="node_00_1"
                    linkID="link_00_1"
                    desc_title="Brussel Sprouts"
                    desc={`These vegetables are typically overlooked due to their bitterness and possible unpleasant childhood memories with them. A great way to revamp this vegetable is to roast it! \n\n Preheat the oven to 400 degrees. Thoroughly wash the brussel sprouts and halve them. Place them on a roasting pan and coat with olive oil (you may want to use your hands for this because you want each piece to be covered thoroughly!) Season with some salt and pepper. Allow to cook for 30 minutes. Depending on the oven, it might need more time, the key indicator is that they are starting to brown!​`}
                    state="disabled_node"
                    leftBranch="straight_branch" />
                <Node
                    nodeID="node_00_2"
                    linkID="link_00_2"
                    desc_title="Broccoli"
                    desc={`Baby trees. At least that's what they are sometimes referred to. A great way to bring out some great flavor in these is also to roast them!​ \n\n Preheat the oven to 400 degrees. Thoroughly wash the broccoli and cut it into pieces of similar size (they should be about the size of the ring you can make with you pointer finger and thumb). Place them on a roasting pan and coat with olive oil (you may want to use your hands for this because you want each piece to be covered thoroughly!) Season with some salt and pepper. Allow to cook for 20 minutes. Depending on the oven, they might need a little more or less time, the key indicator is that they are looking a little crispy!`}
                    state="disabled_node"
                    leftBranch="straight_branch" />
                <Node
                    nodeID="node_00_3"
                    linkID="link_00_3"
                    desc_title="Carrots"
                    desc={`A fun colored sweet vegetable that has incredible flavors both raw and cooked! A comfort food when roasted too! A great way to get your colors in for the day! \n\n Preheat the oven to 400 degrees. Thoroughly wash the carrots and cut them into pieces of similar size. For big carrots, cut off the ends and halve the carrot lengthwise. Then cut the halves in half width wise. From there, cut the carrot into thin sticks. Place them on a roasting pan and coat with olive oil (you may want to use your hands for this because you want each piece to be covered thoroughly!) Season with some salt and pepper. Allow to cook for 20 minutes. Depending on the oven, they might need a little more or less time, the key indicator is that they are looking a little crispy!`}
                    state="disabled_node"
                    leftBranch="straight_branch" />
                <Node
                    nodeID="node_00_4"
                    linkID="link_00_4"
                    desc_title="Green Beans"
                    desc={`Preheat the oven to 400 degrees. Thoroughly wash the green beans and cut off the ends. Place them on a roasting pan and coat with olive oil (you may want to use your hands for this because you want each piece to be covered thoroughly!) Season with some salt and pepper. Allow to cook for 20 minutes. Depending on the oven, they might need a little more or less time, the key indicator is that they are looking a little crispy!`}
                    state="disabled_node"
                    leftBranch="straight_branch" />
                <Node
                    nodeID="node_00_5"
                    linkID="link_00_5"
                    desc_title="Asparagus"
                    desc={`A fibrous vegetable with a great many health benefits! One that also might not have been a childhood favorite, but this method of cooking them could help change that!​ \n\nPreheat the oven to 400 degrees. Thoroughly wash the asparagus and cut off the base end. Place them on a roasting pan and coat with olive oil (you may want to use your hands for this because you want each piece to be covered thoroughly!) Especially make sure the floret at the end is well coated! One option for flavoring is to season with some salt and pepper. Another is to simply season with salt. Allow to cook for 20 - 30 minutes. Depending on the oven, they might need a little more or less time, the key indicator is that they are looking a little crispy! For the first option, it is all ready to enjoy! For the second flavoring option, you can sprinkle a little lemon juice on top! Either way, it should be a great new way to enjoy this vegetable.​`}
                    state="disabled_node" />
            </div>
        );
    }


}

class RootNode extends React.Component {
    render() {
        return (
            <div className="node_div" id={this.props.nodeID}>
                <a className="node" id={this.props.linkID} href={this.props.nodeUrl} target="_blank" rel="noopener noreferrer" onClick={this.props.unlockFunction}></a>
                <div className="desc" id="root_desc">
                    <h1 className="skill_title">{this.props.desc_title}</h1>
                    <p className="skill_desc">{this.props.desc.split('\n').map(function (item, key) {
                        return (
                            <span key={key}>
                                {item}
                                <br />
                            </span>
                        )
                    })}</p>
                </div>
                <div id={this.props.leftBranch} className="branch"></div>
                <div id={this.props.rightBranch} className="branch"></div>
            </div>
        );
    }
}

class Node extends React.Component {
    render() {
        return (
            <div className="node_div" id={this.props.nodeID}>
                <a className={this.props.state} id={this.props.linkID} href={this.props.nodeUrl} target="_blank" rel="noopener noreferrer" onClick={this.props.unlockFunction}></a>
                <div className="desc">
                    <h1 className="skill_title">{this.props.desc_title}</h1>
                    <p className="skill_desc">{this.props.desc.split('\n').map(function (item, key) {
                        return (
                            <span key={key}>
                                {item}
                                <br />
                            </span>
                        )
                    })}</p>
                </div>
                <div className="disabled_desc">
                    <h1 className="skill_title">{this.props.desc_title}</h1>
                    <p className="skill_desc">Node Locked<br />To unlock this node, click on nodes earlier in the tree</p>
                </div>
                <div id={this.props.leftBranch} className="branch"></div>
                <div id={this.props.rightBranch} className="branch"></div>
            </div>
        );
    }
}

class LevelLabels extends React.Component {
    render() {
        return (
            <div className="level_labels">
                <Level levelLineNumber="level_line_1" levelTitleNumber="level_title_1" levelTitle="Level 1"></Level>
                <Level levelLineNumber="level_line_2" levelTitleNumber="level_title_2" levelTitle="Level 2"></Level>
                <Level levelLineNumber="level_line_3" levelTitleNumber="level_title_3" levelTitle="Level 3"></Level>
                <Level levelLineNumber="level_line_4" levelTitleNumber="level_title_4" levelTitle="Level 4"></Level>
            </div>
        );
    }
}

class Level extends React.Component {
    render() {
        return (
            <div className="level">
                <div className="level_line" id={this.props.levelLineNumber}></div>
                <div className="level_title" id={this.props.levelTitleNumber}>{this.props.levelTitle}</div>
            </div>
        );
    }
}

class CharacterCard extends React.Component {
    render() {
        return (
            <div id="character_card" onClick={() => {
                var x = document.getElementById("character_card");
                var y = document.getElementById("character_card_arrow")
                x.style.display = "none";
                y.style.display = "block"
            }}>
                <h3 className="character_card_title">
                    Welcome to the website for the <br />
                Long Distance Engineers!
                </h3>
                <p className="character_card_text">
                    <br /><b>Team Members:</b> Joshua Bautch, Stephen Mitchell, Kelly Sadel, Andrew Sklavounos, Charlotte
                    Solak <br />
                    <br />This website focuses on gamifying skills and activities that can be learned during this time inside.
                    <br /><br />
                    To do this, skills are separated in to "skill trees" and broken up into various activites that help a
                    person become more
                    adept at that skill. The activitites at the bottom of the tree are easy, but get progressively harder the
                    more progress is made.
                    <br /><br />
                    Currently, only the "Cooking" tree has been implemented, however the plan is to implement the same
                    structure for various skills
                    in order to give our users a starting point for learning new things.
                    <br />
                    To use this website, hover over nodes to read a description. Some nodes are links to websites. Click to be
                    taken to that recipe! <br /><br />
                    I hope you enjoy our website!
                </p>
                <h3 className="character_card_title">
                    <br />(to minimize this window, click anywhere in this gray box)
                </h3>
            </div>
        );
    }
}

class CharacterCardArrow extends React.Component {
    render() {
        return (
            <div id="character_card_arrow" onClick={() => {
                var x = document.getElementById("character_card");
                var y = document.getElementById("character_card_arrow")
                x.style.display = "block";
                y.style.display = "none";
            }}></div>
        );
    }
}

function unlockNode(node, link) {
    node.href = link;
    node.className = "node";
}

function unlockNode2(node) {
    node.className = "node";
}


export { Header, NavigationPane, Screen };