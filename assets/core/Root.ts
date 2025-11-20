import { _decorator, Component, Node } from 'cc';
const { property } = _decorator;


export class Root extends Component {

    /** 游戏层节点 */
    @property({
        type: Node,
        tooltip: 'Game  Node',
    })

    /** UI 层节点 */
    @property({
        type: Node,
        tooltip: 'UI  Node',
    })

    


    start() {

    }

    update(deltaTime: number) {

    }
}

