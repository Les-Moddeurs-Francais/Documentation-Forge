---
title: Onglet créatif
description: Comment créer une "creative tab" pour organiser ses items ?
tags: [items]
---

Les onglets créatifs (ou _creatives tabs_) sont des interfaces permettant d'organiser et de répertorier différents blocs et items.

# Déclaration

```java

public static final CreativeModeTab MY_MOD_TAB = new CreativeModeTab("mon_mod") {
    @Override
    public ItemStack makeIcon() {
        return new ItemStack(Items.DIAMOND);
    }
};

```

# Traduction

```json
{
    "itemGroup.mon_mod": "Mon Mod"
}
```