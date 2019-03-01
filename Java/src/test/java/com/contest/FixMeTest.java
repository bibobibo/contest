package com.contest;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class FixMeTest {

    @Test
    public void should_fix_me() {
        assertEquals(5, FixMe.getResult());
    }
}
