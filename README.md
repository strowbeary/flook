# Flook, A React Component library

## Layouts
Layouts are used by declaring a delegate wich implements the layout's protocol

### ListView

```typescript
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
            <div>Row #{atIndex}</div>
        )
    }
    sectionHeader(atIndex: number) {
        return (
            <div>Header #{atIndex}</div>
        )
    }
}

```