#!/bin/bash
COST_PINEAPPLE=50
COST_BANANA=4
COST_WATERMELON=23
COST_BASKET=1
#1pine, 2ban, 3wat, bas
TOTAL=$(($COST_PINEAPPLE + 2*$COST_BANANA + 3*$COST_WATERMELON + $COST_BASKET))
echo "Total Cost is $TOTAL"
