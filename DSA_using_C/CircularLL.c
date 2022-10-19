#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *next;
};
struct node *tail = NULL;

void Display()
{
    printf("\n");
    struct node *newnode;
    newnode = tail->next;

    printf("Values:\n");
    do
    {
        printf("%d\t", newnode->data);
        newnode = newnode->next;
    } while (newnode != tail->next);
    printf("\n");
}

void ins_beg(int x)
{
    printf("\nInserting %d at the beginning.", x);
    struct node *newnode;
    newnode = (struct node *)malloc(sizeof(struct node));
    newnode->data = x;
    newnode->next = NULL;

    if (tail == NULL)
    {
        tail = newnode;
        newnode->next = newnode;
    }
    else
    {
        newnode->next = tail->next;
        tail->next = newnode;
    }
    Display();
}
void ins_end(int x)
{
    printf("\nInserting %d at the end.", x);
    struct node *newnode;
    newnode = (struct node *)malloc(sizeof(struct node));

    if (tail == NULL)
    {
        newnode->data = x;
        newnode->next = newnode;
        tail = newnode;
    }
    else
    {
        newnode->data = x;
        newnode->next = tail->next;
        tail->next = newnode;
        tail = newnode;
    }
    Display();
}
void ins_at_place(int x)
{
    printf("\nInserting %d at specified point.", x);
    struct node *newnode, *temp;
    int i, location;

    temp = tail->next;

    printf("\nEnter the insertion point: ");
    scanf("%d", &location);

    for (i = 0; i < location; i++)
    {
        temp = temp->next;
        if (temp == NULL)
        {
            printf("\nNot enough elements in the list.");
            return;
        }
    }
    newnode = (struct node *)malloc(sizeof(struct node));
    newnode->data = x;
    newnode->next = temp->next;
    temp->next = newnode;
    Display();
}

void del_beg()
{
    printf("\nDeleting element at the beginning.");
    struct node *newnode;

    if (tail == NULL)
    {
        printf("\nAlready empty - Underflow!");
    }
    else
    {
        newnode = tail->next;
        tail->next = newnode->next;
        free(newnode);
    }
    Display();
}
void del_end()
{
    printf("\nDeleting element at the end.");
    struct node *newnode;

    if (tail == NULL)
    {
        printf("\nAlready empty - Underflow!");
    }
    newnode = tail->next;
    while (newnode->next != tail)
    {
        newnode = newnode->next;
    }
    newnode->next = tail->next;
    tail = newnode;
    Display();
}
void del_at_place()
{
    printf("\nDeleting element from specific position.");
    struct node *newnode, *temp;
    int i, location;

    newnode = tail->next;

    printf("\nEnter the deletion point: ");
    scanf("%d", &location);

    for (i = 1; i < location; i++)
    {
        newnode = newnode->next;
    }
    if (newnode != NULL)
    {
        temp = newnode->next;
        newnode->next = temp->next;
        free(temp);
    }
    Display();
}

int main()
{
    ins_beg(10);
    ins_beg(20);
    ins_beg(30);

    ins_end(40);
    ins_end(50);
    ins_end(60);

    ins_at_place(70);
    ins_at_place(80);

    del_beg();
    del_beg();

    del_end();
    del_end();

    del_at_place();

    return 0;
}