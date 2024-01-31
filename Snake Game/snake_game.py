# Abdelrahman Eweis 202100752
# Abdullah Sebai 202102222
# Omar Tawfik 202102088
# Ziad Amr 202102683

import time
import random

import pygame

pygame.init()
# GUI colors of objects (Abdelrahman Eweis)
screen = (150, 216, 255)
snake = (0, 200, 0)
end_text = (255, 0, 0)
food = (255, 105, 180)
score_color = (255, 255, 102)
# GUI display resolution (Ziad Amr)
dis_width = 720
dis_height = 480
display = pygame.display.set_mode((dis_width, dis_height))
pygame.display.update()
pygame.display.set_caption('Snake game')
game_over = False
game_off = False
# centering GUI snake starting point (Ziad Amr)
x1 = 360
y1 = 240
# setting alternate movement variables (Ziad Amr)
x1_move = 0
y1_move = 0
# setting food variables (Abdelrahman Eweis)
food_x = round(random.randrange(10, (dis_width/2) - 20) / 10.0) * 10.0
food_y = round(random.randrange(10, (dis_width/2) - 20) / 10.0) * 10.0
# movement remapping (Abdullah Sebai)
pygame.K_DOWN = pygame.K_s
pygame.K_LEFT = pygame.K_a
pygame.K_RIGHT = pygame.K_d
pygame.K_UP = pygame.K_w
# setting game tick rate and snake speed and text font size (Ziad Amr)
clock = pygame.time.Clock()
snake_sonic = 23
font = pygame.font.SysFont(None, 20)
score_font = pygame.font.SysFont(None, 50)
# snake variables (Abdelrahman Eweis)
snake_shape = 10
lisSnake = []
lenSnake = 1


# score counter function to display score (Abdelrahman Eweis)
def score_num(score):
    value = score_font.render("Your Score: " + str(score), True, score_color)
    display.blit(value,[0, 0])


# snake function to increase snake size as he eats more food (Abdelrahman Eweis)
def snake_size(snake_shape, lisSnake):
    for x in lisSnake:
        pygame.draw.rect(display, snake, [x[0], x[1], snake_shape, snake_shape])


# defining function for displaying text, so it can be easily reused (Ziad Amr)
def message(msg, color):
    mesg = font.render(msg, True, color)
    display.blit(mesg, [dis_width / 2, dis_height / 2])


# score counting variables to add score based on time (Omar Tawfik)
scorecount = 0
counter = 0
# while loop for game run decision
while not game_off:
    display.fill(screen)  # the screen color (blue)
    message("You Lost:) to play again press r to quit press l", end_text)
    score_num(scorecount)
    pygame.display.update()

    # For loop with if or else statement so the player can either keep playing or quit the game (Abdelrahman Eweis)
    for event in pygame.event.get():
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_l:
                game_over = True
                game_off = True
            if event.key == pygame.K_r:
                game_over = False
                game_off = False
    # while loop to create endless loop for game to run (Abdullah Sebai)
    while not game_over:
        #  the counter counting to 300 is approximately 10 seconds (Omar Tawfik)
        counter += 1
        scoremax = 300
        # clock tick rate to decide snake speed (Abdullah Sebai)
        clock.tick(snake_sonic)
        # for loop to decide directionality of snake as the player presses certain buttons (Abdullah Sebai)
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                game_over = True
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_w:
                    x1_move = 0
                    y1_move = -10
                elif event.key == pygame.K_s:
                    x1_move = 0
                    y1_move = 10
                elif event.key == pygame.K_d:
                    x1_move = 10
                    y1_move = 0
                elif event.key == pygame.K_a:
                    x1_move = -10
                    y1_move = 0
        # if statement to make the game end if the player hits a boarder (Abdullah Sebai)
        if x1 >= dis_width or x1 < 0 or y1 >= dis_height or y1 < 0:
            game_over = True
        # x1 and y1 addition to make snake move on grid (Abdullah Sebai)
        x1 += x1_move
        y1 += y1_move
        display.fill(screen)
        # display snake on screen (Abdelrahman Eweis)
        pygame.draw.rect(display, snake, [x1, y1, 10, 10])
        # display food on screen (Abdelrahman Eweis)
        pygame.draw.rect(display, food, [food_x, food_y, 10, 10])
        # list system to decide snake length (Abdelrahman Eweis)
        snake_body = []
        snake_body.append(x1)
        snake_body.append(y1)
        lisSnake.append(snake_body)
        if len(lisSnake) > lenSnake:
            lisSnake.remove(lisSnake[0])
        # for loop and if statement to make sure the snake doesn't overlap itself and ends game (Abdelrahman Eweis)
        for x in lisSnake[:-1]:
            if x == snake_body:
                game_over = True
        # uses snake size function and score function to increase snake size and add to score (Abdelrahman Eweis)
        snake_size(snake_shape, lisSnake)
        score_num(scorecount)
        pygame.display.update()
        # random food generation and snake length increase (Abdelrahman Eweis)
        if x1 == food_x and y1 == food_y:
            # counter conditions for score amount (Omar Tawfik)
            if counter < scoremax / 2:
                counter = 0
                scorecount += 200
            elif scoremax / 2 < counter < scoremax:
                counter = 0
                scorecount += 100
            food_x = round(random.randrange(0, dis_width - snake_shape) / 10.0) * 10.0
            food_y = round(random.randrange(0, dis_height - snake_shape) / 10.0) * 10.0
            lenSnake += 1
        # if the player doesn't eat the food within 10 seconds they lose (Omar Tawfik)
        if counter > scoremax:
            break
# the while loop breaks and quits game(Ziad Amr)
pygame.display.update()
time.sleep(0.75)

pygame.quit()
quit()
