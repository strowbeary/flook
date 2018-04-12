# Flook, A React Component library
This library is still in beta. It works but you should not use it in production.
## Layouts
Layouts are used by declaring a delegate wich implements the layout's protocol

### ListView
This component can be used to generate lists with header;
(demo is coming)

You must inherit from this component
```tsx
import { ListView, ListViewProtocol } from "react-flook";
class MyLayoutDelegate extends ListView implements ListViewProtocol {
    numberOfSection() {
        return 12;
    }
    numberOfRow(inSection: number) {
        return 5;
    }
    row(inSection: number, atIndex: number) {
        return (
            ````html
            <div>Row #{atIndex}</div>
            ```
        )
    }
    sectionHeader(atIndex: number) {
        return (
            <div>Header #{atIndex}</div>
        )
    }
        
    rowClick(inSection: number, atIndex: number) {
        //do something
    }
    
}

```

### InputLine
```typescript
import { InputLine } from "react-flook";

function MyForm(props) {
    return (
        <form>
            <InputLine>
                <label>Username</label>
                <input type={"text"} id="username"/>
            </InputLine>
        </form>
    );
}

```